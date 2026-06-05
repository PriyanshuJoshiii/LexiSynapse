# ⚡ LexiSynapse – Mini Lexical Analyzer, NFA Visualizer & AI Compiler Assistant

![Vite](https://img.shields.io/badge/Vite-Build_Tool-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-Styling-blue)
![Ollama](https://img.shields.io/badge/Ollama-qwen2.5--coder%3A7b-black)
![Gemini](https://img.shields.io/badge/Gemini-3.5_Flash-orange)
![License](https://img.shields.io/badge/License-MIT-green)

> Interactive Compiler Design Platform featuring Lexical Analysis, Thompson's NFA Construction, DFA Visualization, Ollama-powered Code Completion, and Gemini-based AI Assistance.

LexiSynapse is a modern, interactive compiler design learning platform that combines **Lexical Analysis**, **Automata Theory**, and **AI-powered assistance** into a single web application. It allows students and educators to visualize how source code is tokenized, how Regular Expressions are transformed into NFAs using Thompson's Construction, and how Large Language Models can assist in compiler design workflows.

Built entirely on the client side with modern web technologies, LexiSynapse transforms traditionally theoretical compiler concepts into an engaging visual learning experience.
---

## 📸 Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/a9adaf81-9f94-4725-8010-6adae7e6f86c" alt="LexiSynapse Preview" width="100%">
</p>
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
git clone https://github.com/PriyanshuJoshiii/LexiSynapse.git
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

## 🚀 Project Highlights

- Built a complete Lexical Analyzer from scratch using JavaScript.
- Implemented Thompson's Construction for Regex → NFA conversion.
- Developed DFA generation and interactive automata visualization.
- Integrated Ollama (Qwen2.5-Coder 7B) for local AI code completion.
- Integrated Gemini API for compiler theory and regex assistance.
- Designed a modern dark-themed educational interface using Tailwind CSS.
- Entirely client-side architecture with no backend dependency.

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

## ⚠️ Important Notes

* A live demo link to the project is available in the repository description.
* To use the **Lexi AI Assistant**, users must provide their own **Google Gemini API Key**.
* AI-powered code autocompletion requires **Ollama** to be installed and running locally.
* The default completion model used is **qwen2.5-coder:7b**.
* Ensure the Ollama server is active at `http://localhost:11434` before using the autocomplete feature.
* If Ollama is not running, the lexical analysis, NFA/DFA visualization, and other core compiler functionalities will continue to work normally.

---

## 🌐 Live Demo

Try LexiSynapse here:

[Live Demo](https://lexisynapse.vercel.app)

## 🏗️ Architecture

```text
                    User Input
                         │
                         ▼
               Lexical Analyzer
                         │
                         ▼
                 Token Generation
                         │
                         ▼
          Regex → Thompson Construction
                         │
                         ▼
                 NFA Generation
                         │
                         ▼
                DFA Generation
                         │
                         ▼
                DFA Visualization

────────────────────────────────────

AI Layer

├── Ollama (Local Code Completion)
└── Gemini (Lexi AI Assistant)
```
---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Priyanshu Joshi**

B.Tech Computer Science Engineering

Passionate about Compiler Design, Machine Learning, Artificial Intelligence, and Interactive Educational Tools.

