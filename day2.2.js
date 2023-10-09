const fs = require('fs');

// Read the input from a file
const inputFile = 'day2input.txt';
const input = fs.readFileSync(inputFile, 'utf-8');

// Split the input into an array of lines
const lines = input.trim().split('\n');

// Initialize objects or arrays to store the data
const draw = {
    A: 1, //rock
    B: 2, //paper
    C: 3, //scissors
};

const win = {
    A: 2, //paper
    B: 3, //scissors
    C: 1, //rock
}

const lose = {
    A: 3, //scissors
    B: 1, //rock
    C: 2, //paper
}

let score = 0;

// Check through input line by line (round by round)
for(const line of lines) {
    const [playerOne, outcome] = line.trim().split(' ');

    if(outcome == 'X') {
        score += lose[playerOne];
    }

    if(outcome == 'Y') {
        score += 3;
        score += draw[playerOne];
    }

    if(outcome == 'Z') {
        score += 6;
        score += win[playerOne];
    }
} 
console.log(score);