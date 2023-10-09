const fs = require('fs');

// Read the input from a file 
const inputFile = 'day3input.txt';
const input = fs.readFileSync(inputFile, 'utf-8');

// Set the number of priority points
function lowPriority(char){return char.charCodeAt(0) - 96;}
function highPriority(char){return char.charCodeAt(0) - 38;}

// Check for repeated items per two halves of a line
function repeatedItem(input) {
    const lines = input.trim().split('\n');
    const items = [];

    for(line of lines){
        if(line.length % 2 !== 0) {
            return false;
        }

        const firstRucksack = line.slice(0, line.length/2);
        const firstRucksackSet = new Set();
        for (const char of firstRucksack) {
            firstRucksackSet.add(char);
        }

        const secondRucksack = line.slice(line.length/2);
        const secondRucksackSet = new Set();
        for (const char of secondRucksack) {
            secondRucksackSet.add(char);
        }

        for(char of firstRucksackSet){
            if(secondRucksackSet.has(char)) {
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
    console.log(sum);
}

const items = repeatedItem(input);
priorityAmount(items);
