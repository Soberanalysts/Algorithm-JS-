const input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
const [A , T, f] = input.map(item => item.trim());

// console.log(input);
console.log(A, T, f);
// sum = input.reduce((a, b) => Number(a) + Number(b), 0);

// 01010011/0101000111/

// console.log(sum)
// T%A =
// 4 > n   %2==f
//
// turn%people
let arr = [];
let index=0;

for (let i = 0; i < 20000; i++) {
    if(((7*index)+ Math.pow(index,2)))
    arr[i] = 0;
}

arr.push('0','1','0','1');
for(let i = 0; i < n; i ++) {
    arr.push('0');
}
for(let i = 0; i < n; i ++) {
    arr.push('1');
}


// function countCycle (people, turn) {
//     let i = 1;
//     while( 1 ) {
//         if (((7*i)+ Math.pow(i,2)) > turn) {
//             break;
//         } else {
//             i++;
//         }
//     }
//     return i;
// }

console.log(countCycle(A, T));