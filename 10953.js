// const fs = require('fs');
// let input = fs.readFileSync('./input10953.txt').toString();
// console.log(input);
// input = input.split('\n');
// console.log(input);
// const inputC = +input[0];
// const inputTestCase = []; 

// const testCaseNum = +input[0]; 
// console.log('tesCaseNum : ',testCaseNum);

// for(let i= 1;i<=testCaseNum;++i){
//     const arr = input[i].split(',').map((item)=>+item);
  
//     let newArr = [];
//     for(let i=0; i<arr.length; ++i){
//       newArr.push(+arr[i]);
//     }
//     console.log('arr : ', arr);
//     console.log('newArr : ', newArr);
//     let sum=newArr.reduce( (s, a) => s + a, 0 );;
//     console.log('sum : ', sum);
//     // break;
//     let totalSum = 0;
//   }  

  let input = require('fs').readFileSync('./dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(',').map((item)=>+item);
    let sum=numbers.reduce( (s, a) => s + a, 0 );;
    console.log(sum);
}