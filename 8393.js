// const input = Number(require('fs').readFileSync('./dev/stdin').toString().split('\n'));

// let sum = 0;
// sum = input * (input+1) / 2;


// console.log(sum);
const input = Number(require('fs').readFileSync('./dev/stdin').toString().split('\n'));

let sum = 0;

for( let i =0 ; i <= input ; i++){
    sum += i;
}


console.log(sum);