const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// console.log(input);
let sum;

for(let i = 0; i < input.length; i++) {
    sum =0;
   input[i].split(' ').forEach(function(item){sum += Number(item)});
   console.log(sum);
}

