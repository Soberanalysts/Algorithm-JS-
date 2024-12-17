const input = require('fs').readFileSync('./dev/stdin');

let newstr = '';
let index = 0;

for(let i =1; i< input.length; i++) {
    if(i%10 === 0) {
        newstr += input.slice(index,i) + '\n';
        index += 10;
    }
}
newstr += input.slice(index);
console.log(newstr);