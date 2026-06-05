# ⚡ LexiSynapse – Mini Lexical Analyzer, NFA Visualizer & AI Compiler Assistant

LexiSynapse is a modern, interactive compiler design learning platform that combines **Lexical Analysis**, **Automata Theory**, and **AI-powered assistance** into a single web application. It allows students and educators to visualize how source code is tokenized, how Regular Expressions are transformed into NFAs using Thompson's Construction, and how Large Language Models can assist in compiler design workflows.

Built entirely on the client side with modern web technologies, LexiSynapse transforms traditionally theoretical compiler concepts into an engaging visual learning experience.

---

## 📸 Preview

---<img width="1703" height="1016" alt="Screenshot 2026-06-05 at 7 28 10 PM" src="https://github.com/user-attachments/assets/a9adaf81-9f94-4725-8010-6adae7e6f86c" />
## ✨ Features

### 🔍 Lexical Analysis Engine

* Real-time tokenization of source code.
* Supports programming languages such as C, C++, Java, and custom grammars.
* Displays generated lexemes and token categories instantly.
* Implements longest-match (maximal munch) tokenization behavior.

### 📝 Dynamic Token Rule Builder

* Create custom token definitions using Regular Expressions.
* Add, edit, delete, and reorder rules directly from the UI.
* Supports compiler experimentation with user-defined lexical grammars.
* Automatic rule prioritization ensures keywords are matched before identifiers.

### ⚙️ Thompson's Construction Based NFA Generation

* Converts regular expressions into postfix notation.
* Constructs mathematically correct NFAs using Thompson's Construction algorithm.
* Supports concatenation, union (`|`), Kleene star (`*`), plus (`+`), and grouping operators.

### 🌐 Interactive NFA Visualization

* Physics-based graph rendering using `vis-network`.
* Zoom, pan, drag, and inspect NFA states interactively.
* Visual representation of start states, accept states, and transitions.
* Handles large NFAs generated from multiple token definitions.

### 🎯 Token-to-NFA Path Highlighting

* Hover over any generated token.
* Executes a DFS traversal to locate a valid accepting path.
* Animates the exact state transitions followed within the NFA.
* Provides a direct connection between lexical tokens and automata theory.

---

## 🤖 AI-Powered Features

### 1. Local Code Autocompletion (Ollama)

LexiSynapse includes an integrated local AI code completion system.

#### What it does

* Provides inline ghost-text code suggestions while typing.
* Press **Tab** to accept generated completions.
* Generates context-aware code based on current source code and token rules.

#### Model Used

* **qwen2.5-coder:7b**
* Served locally through **Ollama**

#### Endpoint

```text
http://localhost:11434/api/generate
```

#### Implementation

Located inside:

```text
src/main.js
```

Function:

```javascript
fetchCompletion(codeStr)
```

The function sends:

* Current editor content
* User-defined token rules
* Compiler context

to the local LLM and returns inline completion suggestions.

#### Benefits

* Completely offline execution.
* No API costs.
* Source code remains private.
* Fast response times on local hardware.

---

### 2. Lexi AI Compiler Assistant (Gemini)

Lexi is an integrated floating chatbot that assists users with compiler design concepts.

#### What it does

* Generates custom Regular Expressions.
* Explains DFA and NFA concepts.
* Helps debug tokenization rules.
* Assists with compiler theory questions.
* Provides learning support for automata and lexical analysis.

#### Model Used

* **Gemini 3.5 Flash**

#### Implementation

Located inside:

```text
src/main.js
```

Function:

```javascript
sendMessage(text)
```

The chatbot uses a custom system prompt that instructs Gemini to act as a compiler design tutor and regex-generation assistant.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* Vanilla JavaScript (ES6+)

### Styling

* Tailwind CSS
* Dark Theme UI
* Antigravity-inspired visual design

### Visualization

* vis-network

### Syntax Highlighting

* PrismJS

### Build Tool

* Vite

### AI Integration

* Ollama
* Qwen2.5-Coder 7B
* Google Gemini 3.5 Flash

---

## 🚀 Getting Started

### Prerequisites

Install the following:

* Node.js (v18+ recommended)
* Ollama (optional for AI code completion)
* Gemini API Key (optional for Lexi chatbot)

---

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/lexisynapse.git
cd lexisynapse
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 🧠 Educational Value

LexiSynapse bridges the gap between theoretical compiler design and practical implementation by allowing users to:

* Understand lexical analysis visually.
* Explore finite automata interactively.
* Learn Thompson's Construction step-by-step.
* Experiment with custom regular expressions.
* Observe how tokens map to automata paths.
* Use AI assistance to learn compiler concepts faster.

---

## 🔮 Future Enhancements

* DFA generation and minimization.
* Syntax analysis visualization.
* Parse tree construction.
* LR(0), SLR, and LR(1) parser simulation.
* Grammar validation tools.
* Local LLM-powered compiler debugging assistant.
* Exportable automata diagrams.
* Multi-language compiler support.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Priyanshu Joshi**

B.Tech Computer Science Engineering

Passionate about Compiler Design, Machine Learning, Artificial Intelligence, and Interactive Educational Tools.
