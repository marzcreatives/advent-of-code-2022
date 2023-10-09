const fs = require('fs');

// Read the input from a file 
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

const maxCalories = Math.max(...totals);
console.log(maxCalories);
