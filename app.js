// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter your input: ', input => {
//     console.log(`You entered: ${input}`);
//     readline.close();
//   });
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');
console.log(input);
const inputC = +input[0];
const inputTestCase = []; 


const testCaseNum = +input[0]; 
console.log('tesCaseNum : ',testCaseNum);

for(let i= 1;i<=testCaseNum;++i){
  const arr = input[i].split(' ').map((item)=>+item);

  // let newArr = [];
  // for(let i=0; i<arr.length; ++i){
  //   newArr.push(+arr[i]);
  // }
  console.log('arr : ', arr);
  // console.log('newArr : ', newArr);
  
  break;
  let totalSum = 0;
}  
function solution(C, testCase){
  console.log('C : ', C);
  console.log('testCase : ', testCase);
}
  
solution(inputC,inputTestCase);