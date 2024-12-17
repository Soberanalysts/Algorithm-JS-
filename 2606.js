let input = require('fs').readFileSync('./dev/stdin').toString().split('\n');

// Initialize global variables
let countWorm = 0;   // Number of computers affected by the worm
const MAX_COMPUTERS = 100;   // Maximum number of computers
let adj = new Array(MAX_COMPUTERS);  // Array to store connections between computers

for (let i = 0; i < MAX_COMPUTERS; i++) {
    adj[i] = [];   // Initialize each computer with an empty list for connections
}
let visited = new Array(MAX_COMPUTERS).fill(false);   // Array to track visited computers

// Depth-first search (DFS) function
function dfs(u) {
    visited[u] = true;   // Mark the computer as visited
    for (let v of adj[u]) {   // Iterate through adjacent computers
        if (!visited[v]) {
            countWorm++;   // Increment worm-affected computers count
            dfs(v);   // Recursively visit connected computers
        }
    }
    return;
}

// Main function to handle input and execution
function main() {
    // const input = `7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7`; 
    
    // Splitting input for easier processing
    let lines = input
    // .trim().split("\n");
    console.log(lines);
    let countCom = parseInt(lines[0]);   // Number of computers
    let comPair = parseInt(lines[1]);   // Number of direct network connections

    // Parsing pairs of connected computers
    for (let i = 0; i < comPair; i++) {
        let [numCom1, numCom2] = lines[i + 2].split(" ").map(Number);
        adj[numCom1].push(numCom2);   // Add bidirectional connection
        adj[numCom2].push(numCom1);   // Add bidirectional connection
    }

    dfs(1);   // Start DFS from computer 1

    console.log(countWorm);   // Output the number of affected computers
}

main();