# Interview Prep Repository

A catch-all repo for technical interview preparation focusing on data structures & algorithms, system design, and job application tracking.

## Goals

- Master DSA patterns for technical interviews
- Build strong system design knowledge
- Track job applications and interview progress
- Practice in multiple programming languages
- Prepare for Senior/Staff level roles

## Repository Structure

```
interview-prep/
├── problems/              # DSA problems organized by language
│   ├── typescript/        # TypeScript solutions (primary)
│   ├── python/            # Python solutions
│   ├── golang/            # Go solutions
│   ├── java/              # Java solutions
│   ├── c/                 # C solutions
│   └── cpp/               # C++ solutions
├── system-design/         # System design study notes
└── job-applications/      # Application tracking
```

## DSA Problem Topics

Problems are organized by topic/pattern in the order of study:

1. **arrays-hashing** - Array operations and hash maps
2. **two-pointers** - Two pointer technique
3. **sliding-window** - Sliding window pattern
4. **prefix-sum** - Prefix sum technique
5. **stacks** - Stack data structure
6. **binary-search** - Binary search algorithm
7. **linked-list** - Linked list operations
8. **trees** - Tree traversal and operations
9. **heap-priority-queue** - Heap and priority queue
10. **backtracking** - Backtracking algorithms
11. **graphs** - Graph algorithms
12. **advanced-graphs** - Advanced graph topics
13. **dynamic-programming-1d** - 1D DP problems
14. **dynamic-programming-2d** - 2D DP problems
15. **intervals** - Interval problems
16. **greedy** - Greedy algorithms
17. **mixed** - Problems with multiple strategies

## Problem Structure

Each language has its own directory with topic-organized problems:

```
problems/{language}/{topic}/{leetcode-number}_{problem-name}/
├── solution.{ext}         # Solution implementation
└── solution.test.{ext}    # Unit tests

Example:
problems/typescript/1-arrays-hashing/0001_two_sum/
├── solution.ts
└── solution.test.ts
```

Problems are numbered with LeetCode problem numbers (e.g., `0001_two_sum`, `0217_contains_duplicate`) to maintain consistency and easy reference.

## Getting Started

### TypeScript (Bun + Vitest)

```bash
# Install dependencies
cd problems/typescript
bun install

# Run all tests
bun test

# Run tests with UI
bun test:ui

# Run tests with coverage
bun test:coverage

# Run specific topic tests
bun test 1-arrays-hashing

# Run specific problem tests
bun test 1-arrays-hashing/0001_two_sum
```

### Python (pytest)

```bash
# Set up virtual environment (first time only)
cd problems/python
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run all tests
pytest

# Run specific topic tests
pytest 1-arrays-hashing

# Run specific problem tests
pytest 1-arrays-hashing/0001_two_sum

# Run with coverage
pytest --cov=.

# move to working directory and run pytest with watch
ptw .

# Exit from venv, done with python
deactivate
```

### Go

```bash
cd golang
go mod init interview-prep

# Run all tests
go test ./...

# Run specific package
go test ./problems/arrays-hashing/two-sum
```

### Java

```bash
cd java
# Using Maven
mvn test

# Using Gradle
gradle test
```

## Adding a New Problem

1. Create problem directory in the language folder: `problems/{language}/{topic}/{number}_{name}/`
2. Implement solution and tests
3. Optionally add notes as comments or in a separate markdown file

### Example (TypeScript):

```bash
mkdir -p problems/typescript/1-arrays-hashing/0242_valid_anagram
touch problems/typescript/1-arrays-hashing/0242_valid_anagram/solution.ts
touch problems/typescript/1-arrays-hashing/0242_valid_anagram/solution.test.ts
```

### Example (Python):

```bash
mkdir -p problems/python/1-arrays-hashing/0242_valid_anagram
touch problems/python/1-arrays-hashing/0242_valid_anagram/solution.py
touch problems/python/1-arrays-hashing/0242_valid_anagram/test_solution.py
```

## System Design

Located in `system-design/`, organized into:

- **concepts/** - Core concepts (scalability, databases, caching, etc.)
- **patterns/** - Architecture patterns (microservices, event-driven, etc.)
- **case-studies/** - Common design problems (Twitter, URL shortener, etc.)

## Job Applications

Located in `job-applications/`, organized into:

- **applied/** - Applications submitted
- **interviewing/** - Active interview processes
- **archived/** - Completed/rejected applications

Each application should have its own markdown file with company, role, and progress notes.

## Languages Supported

- TypeScript (primary)
- Python
- Go
- Java
- C
- C++

## Study Plan

Currently following a topic-based approach, spending approximately one week per topic. After completing all topics, will transition to mixed practice with curated lists.

## Resources

- [LeetCode](https://leetcode.com/)
- [Blind 75](https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU)
- [Neetcode 150](https://neetcode.io/)

