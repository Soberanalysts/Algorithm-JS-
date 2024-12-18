// const input = Number(require('fs').readFileSync('./dev/stdin').toString());

// function slash(x) {
//     if (x < 1) {
//         return '-'; // 종료 조건
//     }
//     let space = '';
//     for(let i = 0; i < Math.pow(3,x-1); i++) {
//         space += ' ';
//     }
//      return (slash(x-1) + space + slash(x-1)); // 재귀함수
// }

// console.log(slash(input));

// 스택어버플로(재귀 너무 깊어짐)





const input = Number(require('fs').readFileSync('./dev/stdin').toString());

function slash(x) {
    if (x < 1) {
        return '-'; // 종료 조건
    }

    let result = ['-']; // 초기값
    for (let i = 1; i <= x; i++) {
        const space = ' '.repeat(Math.pow(3, i - 1)); // 공백 생성
        const newResult = [];
        result.forEach((item) => {
            newResult.push(item + space + item);
        });
        result = newResult;
    }
    return result.join('');
}

console.log(slash(input));