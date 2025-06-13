# SE2 Parser & Logger Utility

A TypeScript utility for parsing **CSV**, **JSON**, and **XML** files into structured model objects using **Builder** and **Mapper** patterns. It includes Winston-based logging and a full test suite with Jest.

![CI/CD Pipeline](https://github.com/Software-Eng-Excellence/hadigghazi-cohort-2/actions/workflows/ci.yml/badge.svg)

---

## 🧩 Features

- **JSON / XML / CSV Parsers**: Unified interface to read multiple formats
- **Builder Pattern**: For clean and safe construction of `Item` subclasses like `Book`, `Toy`, and `Cake`
- **Mapper Classes**: Map raw file inputs to proper model instances
- **Winston Logger**: Logs to both console and rotating files under `/logs`
- **Jest Testing**: 90%+ coverage on models, mappers, parsers, and logger

---

## Quick Start

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

This will execute `src/index.ts`, which loads data from `data/` and logs the parsed outputs.

---

## 🧪 Run Tests

```bash
npm run test
```

Test suite includes:

* Mapper behavior across all formats
* Builder defaults and edge cases
* Logger creation and output levels
* Parser validation for bad/missing data
* Full error handling and fallback behavior