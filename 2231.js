// const input = require('fs').readFileSync('./dev/stdin').toString().trim();

// const inputNum=Number(input);
// const inputLen=input.length;

// let arr = [];
// let arr2 = [];
// let intArr=[];
// let sum = 0;
// let j =0;

// // for (let i =(inputNum-9*inputLen); i < inputNum; i++) {
// for (let i =1; i < inputNum; i++) {
//     let iStr=i.toString();

//     arr2 = [...iStr];
//     while(j < iStr.length) {
//         intArr = arr2.map(Number);
//         sum += intArr[j];
//         j++;   
//     }
//     sum += Number(i);

//     if(sum === inputNum) {
//         arr.push(i);
//     }
//     arr2=[];
//     sum =0;
//     j=0
// }

// arr.sort();
// console.log(arr[0]);

const input = require('fs').readFileSync('./dev/stdin').toString().trim();
const inputNum = Number(input);

let result = 0;

for (let i = 1; i < inputNum; i++) {
    const digits = i.toString().split('').map(Number); // i의 각 자리수를 배열로 변환
    const sum = i + digits.reduce((a, b) => a + b, 0); // i와 각 자리수의 합 계산
    
    if (sum === inputNum) {
        result = i; // 생성자를 찾음
        break;
    }
}

console.log(result);