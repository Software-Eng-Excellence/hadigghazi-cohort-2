# SE2 Parser & Logger Utility

A TypeScript utility for parsing **CSV**, **JSON**, and **XML** files with built-in system logging using Winston. It supports reading and writing data with error handling, and comes with unit tests.

![CI/CD Pipeline](https://github.com/Software-Eng-Excellence/hadigghazi-cohort-2/actions/workflows/ci.yml/badge.svg)

---

## 🧩 Features

- 📚 **JSON Parser**: Read/write `.json` files easily
- 🤖 **XML Parser**: Read/write `.xml` files with attribute support
- 🍰 **CSV Parser**: Read/write `.csv` files with column validation
- 📦 **Winston Logger**: Logs to console and files (`logs/`)
- 🧪 **Jest Testing**: Tests for all parsers and edge cases

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
````

### 2. Run in development mode (TypeScript)

```bash
npm run dev
```

### 3. Or compile and run the built JS

```bash
npm start
```

---

## 🔧 Example Usage (`src/index.ts`)

This script will run when using one of the commands above and it will:

* Load `book.json`, `toy.xml`, and `cake.csv` from the `data/` folder
* Log their parsed contents

---

## 🧪 Run Tests

```bash
npm test
```

Test cases cover:

* Reading/writing for valid and invalid CSV, JSON, XML
* Empty file handling
* Edge case rows and columns