const fs = require('fs');

// Read the input from a file (change 'input.txt' to the actual file path)
const inputFile = 'day1input.txt';
const input = fs.readFileSync(inputFile, 'utf-8');

// Split the input into an array of lines
const lines = input.trim().split('\n');

const totals = [];
let sum = 0;

for (const line of lines) {
    if (line.trim() === '') {
        totals.push(sum); // Push the sum when an empty line is encountered
        sum = 0; // Reset the sum to 0
    } else {
        const value = parseFloat(line);

        if (!isNaN(value)) {
            sum += value;
        }
    }
}
const elfOfHighestValue = totals.indexOf(Math.max(...totals));
const firstCalories = totals.splice(elfOfHighestValue, 1)[0];

console.log(`First Elf's Calories: ` +firstCalories);

const elfOfSecondValue = totals.indexOf(Math.max(...totals));
const secondCalories = totals.splice(elfOfSecondValue, 1)[0];

console.log(`Second Elf's Calories: ` +secondCalories);

const elfOfThirdValue = totals.indexOf(Math.max(...totals));
const thirdCalories = totals.splice(elfOfThirdValue, 1)[0];

console.log(`Third Elf's Calories: ` + thirdCalories);

const totalCalories = firstCalories + secondCalories + thirdCalories;

console.log(`Top 3 Elves Calories: ` + totalCalories);
