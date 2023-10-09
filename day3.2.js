const fs = require('fs');

// Read the input from a file 
const inputFile = 'day3input.txt';
const input = fs.readFileSync(inputFile, 'utf-8');

// Set the number of priority points
function lowPriority(char){return char.charCodeAt(0) - 96;}
function highPriority(char){return char.charCodeAt(0) - 38;}

// Check for repeated items within the set of three lines
function repeatedItem(input) {
    const lines = input.trim().split('\n');
    const items = [];

    for(let i = 0; i < lines.length; i+=3) {
        const firstGroup = lines[i];
        const firstGroupSet = new Set();
        for (const char of firstGroup) {
            firstGroupSet.add(char);
        }

        const secondGroup = lines[i+1];
        const secondGroupSet = new Set();
        for (const char of secondGroup) {
            secondGroupSet.add(char);
        }

        const thirdGroup = lines[i+2];
        const thirdGroupSet = new Set();
        for (const char of thirdGroup) {
            thirdGroupSet.add(char);
        }

        for(char of firstGroupSet){
            if(secondGroupSet.has(char) && thirdGroupSet.has(char)) {
                items.push(char);
            }
        }
    }
    return items;
}

// Sum the priorities
function priorityAmount(items){
    let sum = 0;
    for(const item of items){
        if(item.charCodeAt(0) < 91){
            sum += highPriority(item);
        } else {
            sum += lowPriority(item);
        }
    } 
    console.log(`Sum of Priorities: ` + sum);
}

const items = repeatedItem(input);
console.log(`Number of Groups: ` + items.length);
priorityAmount(items);
