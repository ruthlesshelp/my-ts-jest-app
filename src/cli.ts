#!/usr/bin/env node

import { tally } from './tally';

function showHelp(): void {
  console.log(`
Usage: tally <number1> <number2> [number3] ...

Add two or more numbers together.

Arguments:
  <number1> <number2> ...  Numbers to add together (at least 2 required)

Options:
  --help                   Show this help message

Examples:
  tally 3 4                Returns: 7
  tally -5 17              Returns: 12
  tally 1 2 3 4 5         Returns: 15
`);
}

function main(): void {
  const args = process.argv.slice(2);

  // Handle help flag
  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  // Check if we have enough arguments
  if (args.length < 2) {
    console.error('Error: At least two numbers are required.');
    console.error('Use "tally --help" for usage information.');
    process.exit(1);
  }

  // Parse arguments as numbers
  const numbers: number[] = [];
  for (const arg of args) {
    const num = parseFloat(arg);
    if (isNaN(num)) {
      console.error(`Error: "${arg}" is not a valid number.`);
      process.exit(1);
    }
    numbers.push(num);
  }

  try {
    const result = tally(...numbers);
    console.log(result);
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
