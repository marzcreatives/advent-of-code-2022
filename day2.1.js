const fs = require('fs');

// Read the input from a file 
const inputFile = 'day2input.txt';
const input = fs.readFileSync(inputFile, 'utf-8');

// Split the input into an array of lines
const lines = input.trim().split('\n');

// Initialize objects or arrays to store the data
const value = {
    X: 1,
    Y: 2,
    Z: 3,
};

let score = 0;

// Check through input line by line (round by round)
for(const line of lines) {
    const [playerOne, playerTwo] = line.trim().split(' ');

    // Check for rounds drawn 
    if ((playerOne == 'A' && playerTwo == 'X') || 
            (playerOne == 'B' && playerTwo == 'Y') || 
                (playerOne == 'C' && playerTwo == 'Z')) {
        score += 3;
        score += value[playerTwo];
    }
    // Check for rounds won
    if ((playerOne == 'A' && playerTwo == 'Y') || 
    (playerOne == 'B' && playerTwo == 'Z') || 
        (playerOne == 'C' && playerTwo == 'X')) {
        score += 6;
        score += value[playerTwo];
    }  
    
    // Check for rounds lost
    if ((playerOne == 'A' && playerTwo == 'Z') || 
    (playerOne == 'B' && playerTwo == 'X') || 
        (playerOne == 'C' && playerTwo == 'Y')) {
        score += value[playerTwo];
    } 
} 
console.log(score);