# ⚡ Mini Lexical Analyzer & NFA Visualizer

A fast, interactive, client-side web application that performs **Lexical Analysis** on source code and mathematically constructs/visualizes the underlying **Nondeterministic Finite Automaton (NFA)** using Thompson's Construction algorithm.

Built for compiler design students, educators, and language enthusiasts to visualize exactly how a computer reads and tokenizes source code.

## ✨ Features

- **Live Tokenization:** Type raw source code (C, C++, Java, etc.) and watch it instantly break down into distinct lexical tokens.
- **Dynamic Regex Rules:** Add, edit, and reorder your own Regular Expression rules directly in the UI. 
- **Auto-Priority Sorting:** The engine automatically sorts rules based on exact matches vs. identifiers, guaranteeing correct maximal-munch tokenization regardless of UI order.
- **NFA Graph Generation:** Converts your regex rules into postfix notation and uses *Thompson's Construction* to build a massive, mathematically perfect NFA.
- **Physics-Based Visualization:** Uses `vis-network` to render the automaton graph with interactive gravity, zooming, and dragging.
- **Path Highlight Animation:** Hover over any generated token in the output table to watch a Depth-First Search (DFS) trace its exact path through the NFA graph in real-time!

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5
- **Styling:** Tailwind CSS (Dark Mode / Antigravity Aesthetic)
- **Graphing Engine:** `vis-network`
- **Syntax Highlighting:** PrismJS
- **Build Tool:** Vite

## 🚀 Getting Started

Because this project uses Vite, you can easily run it locally in seconds.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mini-lexical-analyzer.git
   
<img width="1709" height="927" alt="Screenshot 2026-03-31 at 6 27 25 PM" src="https://github.com/user-attachments/assets/325b8475-8069-49e2-ab2c-b6760f7056c9" />
