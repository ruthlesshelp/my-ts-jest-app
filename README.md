# TypeScript Node.js Starter Project

A well-configured starting point for Node.js projects using TypeScript with modern development tools and best practices.

## 🎯 Purpose

This repository serves as a foundation for Node.js projects that prioritize code quality and effective agile engineering practices. It includes:

- **TypeScript** for type safety and better developer experience
- **Modern tooling** with formatting, linting, and comprehensive testing
- **Best practices** that promote maintainable and reliable code
- **Agile engineering** workflows that support rapid, iterative development

## 🚀 What's Included

### **Development Tools**

- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking and modern JavaScript features
- **[Prettier](https://prettier.io/)** - Automatic code formatting for consistency
- **[ESLint](https://eslint.org/)** - Code linting with TypeScript-specific rules
- **[Jest](https://jestjs.io/)** - Unit testing framework with TypeScript support

### **Testing Framework**

- **Unit Tests** - Traditional Jest unit tests for individual functions
- **Behavior-Driven Development (BDD)** - Using [jest-cucumber](https://github.com/bencompton/jest-cucumber) for feature-based testing
- **Comprehensive Coverage** - Both test approaches ensure thorough code validation

### **Quality Pipeline**

The project enforces a quality-first approach with an automated pipeline:

```
Format → Lint → Build → Test
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-ts-jest-app

# Install dependencies
npm install

# Build the project
npm run build
```

### Available Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run format`       | Format code with Prettier           |
| `npm run format:check` | Check if code is properly formatted |
| `npm run lint`         | Run ESLint with auto-fix            |
| `npm run build`        | Format → Lint → Compile TypeScript  |
| `npm run test`         | Run complete pipeline + Jest tests  |
| `npm run test:unit`    | Run only unit tests                 |
| `npm run test:bdd`     | Run only BDD/feature tests          |

## 📁 Project Structure

```
├── src/                    # Source code
│   ├── tally.ts           # Main function
│   └── cli.ts             # Command-line interface
├── __tests__/             # Test files
│   ├── tally.test.ts      # Unit tests
│   └── tally.steps.ts     # BDD step definitions
├── features/              # BDD feature files
│   └── tally.feature      # Gherkin feature specifications
├── dist/                  # Compiled output (auto-generated)
└── Configuration files
```

## 🧪 Testing Approach

### Unit Tests

Traditional Jest tests for testing individual functions:

```typescript
test('adds 1 + 2 to equal 3', () => {
  expect(tally(1, 2)).toBe(3);
});
```

### BDD Tests

Feature-driven tests using Gherkin syntax:

```gherkin
Feature: Tally Function
  Scenario: Adding two numbers
    Given I have the numbers 5 and 3
    When I add them together
    Then the result should be 8
```

## 🏗️ Agile Engineering Benefits

This starter promotes effective agile development through:

- **Fast Feedback Loops** - Immediate formatting, linting, and test results
- **Quality Gates** - Automated checks prevent low-quality code from being committed
- **Refactoring Confidence** - Comprehensive tests enable safe code changes
- **Team Consistency** - Shared tooling ensures uniform code style and practices
- **Continuous Integration Ready** - `npm test` provides complete validation for CI/CD pipelines

## 🔧 Customization

### Prettier Configuration (`.prettierrc`)

Adjust formatting rules to match your team's preferences:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### ESLint Configuration (`eslint.config.js`)

Modify linting rules for your project needs:

```javascript
rules: {
  '@typescript-eslint/explicit-function-return-type': 'warn',
  // Add your custom rules here
}
```

### TypeScript Configuration (`tsconfig.json`)

Configure compilation options and module resolution.

## 📦 Example CLI Tool

This starter includes a simple CLI tool (`tally`) that demonstrates:

- Command-line argument parsing
- Error handling and user feedback
- Help documentation
- Executable npm package configuration

Try it out:

```bash
# After building
npx tally 3 4        # Returns: 7
npx tally --help     # Shows usage information
```

## 🚀 Next Steps

1. **Replace the example code** with your actual project logic
2. **Update package.json** with your project details
3. **Customize configurations** to match your team's standards
4. **Add additional dependencies** as needed for your specific use case
5. **Set up CI/CD** using the `npm test` command for automated validation

## 🤝 Contributing

This starter encourages good development practices:

1. **Format** your code: `npm run format`
2. **Lint** for issues: `npm run lint`
3. **Test** thoroughly: `npm test`
4. **Write BDD scenarios** for new features
5. **Maintain type safety** with TypeScript

---

**Happy coding!** 🎉 This starter gives you a solid foundation for building maintainable, well-tested Node.js applications with TypeScript.
