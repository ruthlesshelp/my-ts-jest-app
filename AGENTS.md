# AGENTS.md - AI Agent Project Guide

## 🤖 Machine-Readable Project Information

This file provides structured information for AI agents working with this TypeScript Node.js project.

## Project Type & Technology Stack

```yaml
project_type: "typescript-nodejs-cli"
language: "typescript"
runtime: "node.js"
package_manager: "npm"
test_framework: "jest"
build_tool: "tsc"
formatter: "prettier"
linter: "eslint"
bdd_framework: "jest-cucumber"
```

## Critical Commands

### Build Pipeline (Execute in Order)
```bash
# Complete validation pipeline
npm test                    # Format → Lint → Build → Test

# Individual steps
npm run format             # Format code with Prettier
npm run lint               # Lint with ESLint (auto-fix enabled)
npm run build              # Format → Lint → Compile TypeScript
```

### Testing Commands
```bash
npm test                   # Full pipeline + all tests
npm run test:unit          # Unit tests only
npm run test:bdd           # BDD/cucumber tests only
jest                       # Direct Jest execution
```

### Validation Commands
```bash
npm run format:check       # Check formatting without fixing
npx eslint src/**/*.ts     # Lint specific files
npx tsc --noEmit          # Type check without building
```

## File Structure & Patterns

### Source Code Locations
```
src/                       # Primary source code
├── *.ts                   # TypeScript source files
└── cli.ts                 # CLI entry point

__tests__/                 # Test files
├── *.test.ts             # Unit tests (Jest)
└── *.steps.ts            # BDD step definitions

features/                  # BDD feature files
└── *.feature             # Gherkin scenarios

dist/                      # Compiled output (auto-generated)
```

### Configuration Files
```
tsconfig.json             # TypeScript configuration
eslint.config.js          # ESLint rules (CommonJS format)
.prettierrc               # Prettier formatting rules
package.json              # Dependencies & scripts
.gitignore                # Git exclusions
```

## Security & Safety Guardrails

### File Modification Rules
- ✅ **SAFE TO MODIFY**: `src/`, `__tests__/`, `features/`, config files
- ⚠️ **CAUTION**: `package.json` (check dependencies before changes)
- ❌ **DO NOT MODIFY**: `node_modules/`, `dist/`, `.git/`
- ❌ **DO NOT CREATE**: `.env` files with secrets

### Code Quality Gates
```bash
# All code changes MUST pass these checks:
1. npm run format          # Prettier formatting
2. npm run lint            # ESLint validation
3. npx tsc                 # TypeScript compilation
4. npm test                # All tests pass
```

### Safe Operations
- File creation/editing in `src/` and `__tests__/`
- Adding dependencies via `npm install --save-dev`
- Configuration updates (with testing)
- Test file modifications

### Restricted Operations
- Never run `npm install` without `--save` or `--save-dev`
- Never modify `package-lock.json` directly
- Never commit without running full test suite
- Never disable TypeScript strict mode

## Testing Requirements

### Unit Test Pattern
```typescript
// __tests__/*.test.ts
import { functionName } from '../src/module';

test('describes what it tests', () => {
  expect(functionName(input)).toBe(expectedOutput);
});
```

### BDD Test Pattern
```typescript
// __tests__/*.steps.ts
import { loadFeature, defineFeature } from 'jest-cucumber';
import { functionName } from '../src/module';

const feature = loadFeature('features/feature-name.feature');

defineFeature(feature, test => {
  test('Scenario name', ({ given, when, then }) => {
    // Step implementations
  });
});
```

### Feature File Pattern
```gherkin
# features/*.feature
Feature: Feature Name
  Scenario Outline: Scenario description
    Given I have <input>
    When I perform <action>
    Then the result should be <expected>
    
    Examples:
      | input | action | expected |
      | value | action | result   |
```

## Build Artifacts

### Generated Files (Do Not Edit)
```
dist/                      # TypeScript compilation output
dist/src/                  # Compiled source
dist/__tests__/            # Compiled tests
coverage/                  # Test coverage reports
.eslintcache              # ESLint cache
```

### Entry Points
```
dist/src/cli.js           # CLI executable
package.json "bin"        # CLI command configuration
```

## Environment Dependencies

### Required Node.js Version
```json
"engines": {
  "node": ">=16.0.0"
}
```

### Required Global Tools
```bash
# Auto-installed via npm scripts
npx prettier              # Code formatting
npx eslint                # Code linting
npx tsc                   # TypeScript compilation
npx jest                  # Test execution
```

## Error Handling Patterns

### Common Issues & Solutions
```yaml
typescript_errors:
  solution: "npm run build"
  check: "npx tsc --noEmit"

formatting_errors:
  solution: "npm run format"
  check: "npm run format:check"

linting_errors:
  solution: "npm run lint"
  check: "npx eslint src/**/*.ts"

test_failures:
  solution: "Check test files match feature scenarios"
  debug: "npm run test:unit && npm run test:bdd"

missing_dependencies:
  solution: "npm install"
  verify: "npm ls"
```

## Integration Points

### CLI Usage
```bash
# After build, CLI available as:
npx tally <args>          # Via npx
./dist/src/cli.js <args>  # Direct execution
```

### Package.json Scripts
```json
{
  "format": "prettier --write \"src/**/*.ts\" \"__tests__/**/*.ts\" \"*.{js,json,md}\"",
  "lint": "eslint src/**/*.ts __tests__/**/*.ts --fix",
  "build": "npm run format && npm run lint && tsc",
  "test": "npm run build && jest"
}
```

## AI Agent Guidelines

### Before Making Changes
1. Run `npm test` to establish baseline
2. Check current file contents before editing
3. Understand project structure and dependencies

### After Making Changes
1. Always run `npm run format` for consistency
2. Verify with `npm run lint` for code quality
3. Ensure `npm test` passes completely
4. Check generated `dist/` for expected output

### Safe Modification Workflow
```bash
# 1. Verify current state
npm test

# 2. Make changes to src/ or __tests__/
# (edit files as needed)

# 3. Validate changes
npm run format              # Fix formatting
npm run lint               # Fix linting issues
npm test                   # Ensure all tests pass

# 4. Verify CLI still works (if applicable)
npx tally --help
```

### Emergency Recovery
```bash
# If build breaks:
rm -rf dist/               # Clean build artifacts
npm install                # Reinstall dependencies
npm run build              # Rebuild from scratch

# If tests break:
git checkout HEAD -- __tests__/  # Reset test files
npm test                   # Verify recovery
```

## Metadata

```yaml
last_updated: "2025-09-15"
format_version: "1.0"
compatibility: "AI agents, automation tools, CI/CD systems"
maintenance: "Keep in sync with package.json scripts and project structure"
```