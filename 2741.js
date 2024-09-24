let input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
const num = Number(input);
let answer = '';

for(let i = 1; i <= num;i++){
    answer += i + "\n";
}

console.log(answer);