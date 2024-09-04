let input = require('fs').readFileSync('./dev/stdin11021').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ').map((item)=>+item);
    let sum=numbers.reduce( (s, a) => s + a, 0 );
    console.log(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${sum}`);
}