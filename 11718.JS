let input = require('fs').readFileSync('./dev/stdin').toString();
console.log(`${input}`);
for (let i = 1; i <= input[0]; i++) {
    let string = input[i].map(item);
    console.log(`${string}`);
}