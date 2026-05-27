export class DFAState {
  constructor(id, nfaStates) {
    this.id = id;
    this.nfaStates = new Set(nfaStates); // Set of NFA state IDs
    this.transitions = {}; // symbol -> dfa state id
  }

  addTransition(symbol, stateId) {
    if (!this.transitions[symbol]) {
      this.transitions[symbol] = [];
    }
    // For DFA, there should ideally be only one destination per symbol.
    // However, to keep it compatible with our NFA visualizer structure, 
    // we use an array, but it will contain only one item.
    if (!this.transitions[symbol].includes(stateId)) {
        this.transitions[symbol].push(stateId);
    }
  }
}

// Helper: Epsilon closure of a single NFA state ID or array of IDs
function epsilonClosure(stateIds, nfaStatesMap) {
  const closure = new Set(Array.isArray(stateIds) ? stateIds : [stateIds]);
  const stack = Array.isArray(stateIds) ? [...stateIds] : [stateIds];

  while (stack.length > 0) {
    const currentStateId = stack.pop();
    const state = nfaStatesMap.get(currentStateId);
    if (state && state.epsilonTransitions) {
      for (const nextState of state.epsilonTransitions) {
        if (!closure.has(nextState.id)) {
          closure.add(nextState.id);
          stack.push(nextState.id);
        }
      }
    }
  }

  return closure;
}

// Helper: Move from a set of state IDs on a symbol
function move(stateIds, symbol, nfaStatesMap) {
  const result = new Set();
  for (const id of stateIds) {
    const state = nfaStatesMap.get(id);
    if (state && state.transitions && state.transitions[symbol]) {
      for (const nextState of state.transitions[symbol]) {
        result.add(nextState.id);
      }
    }
  }
  return result;
}

// Collect all alphabet symbols used in the NFA
function getAlphabet(nfaStatesMap) {
  const alphabet = new Set();
  for (const [id, state] of nfaStatesMap.entries()) {
    for (const symbol in state.transitions) {
      alphabet.add(symbol);
    }
  }
  return Array.from(alphabet);
}

// Helper function to build a map of NFA states for quick lookup
function buildNfaStatesMap(nfaData) {
  const map = new Map();
  const queue = [nfaData.start];
  const visited = new Set();

  while (queue.length > 0) {
    const state = queue.shift();
    if (visited.has(state.id)) continue;
    visited.add(state.id);
    map.set(state.id, state);

    for (const nextState of state.epsilonTransitions) {
      if (!visited.has(nextState.id)) queue.push(nextState);
    }
    for (const symbol in state.transitions) {
      for (const nextState of state.transitions[symbol]) {
        if (!visited.has(nextState.id)) queue.push(nextState);
      }
    }
  }
  return map;
}

// Main Subset Construction Algorithm
export function buildLexerDFA(nfaData, rules) {
  if (!nfaData || !nfaData.start) return null;

  const nfaStatesMap = buildNfaStatesMap(nfaData);
  const alphabet = getAlphabet(nfaStatesMap);
  
  const dfaStates = [];
  // Maps a sorted comma-separated string of NFA IDs to a DFA State ID
  const dfaStateIdMap = new Map(); 
  let dfaStateCounter = 0;

  const startClosure = epsilonClosure(nfaData.start.id, nfaStatesMap);
  const startClosureArr = Array.from(startClosure).sort((a, b) => a - b);
  const startClosureKey = startClosureArr.join(',');

  const startDFAState = new DFAState(dfaStateCounter++, startClosureArr);
  dfaStates.push(startDFAState);
  dfaStateIdMap.set(startClosureKey, startDFAState.id);

  const queue = [startDFAState];
  let head = 0;

  while (head < queue.length) {
    const currentDFAState = queue[head++];
    
    for (const symbol of alphabet) {
      const moveResult = move(currentDFAState.nfaStates, symbol, nfaStatesMap);
      if (moveResult.size > 0) {
        const closureResult = epsilonClosure(Array.from(moveResult), nfaStatesMap);
        const closureArr = Array.from(closureResult).sort((a, b) => a - b);
        const closureKey = closureArr.join(',');

        let targetDFAStateId;
        if (!dfaStateIdMap.has(closureKey)) {
          const newDFAState = new DFAState(dfaStateCounter++, closureArr);
          dfaStates.push(newDFAState);
          dfaStateIdMap.set(closureKey, newDFAState.id);
          queue.push(newDFAState);
          targetDFAStateId = newDFAState.id;
        } else {
          targetDFAStateId = dfaStateIdMap.get(closureKey);
        }

        currentDFAState.addTransition(symbol, targetDFAStateId);
      }
    }
  }

  // Determine accept states and rule priorities
  const dfaAcceptStatesMap = new Map();
  // Rules are assumed to be passed in priority order (index 0 is highest priority)
  const rulePriority = {};
  if (rules) {
      rules.forEach((rule, index) => {
          rulePriority[rule.type] = index;
      });
  }

  for (const dfaState of dfaStates) {
    let highestPriorityRuleType = null;
    let highestPriority = Infinity;

    for (const nfaStateId of dfaState.nfaStates) {
      if (nfaData.acceptStatesMap.has(nfaStateId)) {
        const ruleType = nfaData.acceptStatesMap.get(nfaStateId);
        const priority = rulePriority[ruleType] !== undefined ? rulePriority[ruleType] : Infinity;
        
        if (priority < highestPriority) {
          highestPriority = priority;
          highestPriorityRuleType = ruleType;
        }
      }
    }

    if (highestPriorityRuleType) {
      dfaAcceptStatesMap.set(dfaState.id, highestPriorityRuleType);
    }
  }

  // Format into a visualizer-friendly object
  // Reconstruct nodes to mimic NFA state objects
  const visualizerStatesMap = new Map();
  
  for (const dfaState of dfaStates) {
      visualizerStatesMap.set(dfaState.id, {
          id: dfaState.id,
          transitions: dfaState.transitions,
          epsilonTransitions: [] // DFA has no epsilon transitions
      });
  }
  
  // Link transition references
  for (const dfaState of dfaStates) {
      const vState = visualizerStatesMap.get(dfaState.id);
      for (const symbol in vState.transitions) {
          const targetIds = vState.transitions[symbol];
          vState.transitions[symbol] = targetIds.map(id => visualizerStatesMap.get(id));
      }
  }

  return {
    start: visualizerStatesMap.get(startDFAState.id),
    acceptStatesMap: dfaAcceptStatesMap,
    isDFA: true
  };
}
