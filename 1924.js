const input = require('fs').readFileSync('./dev/stdin').toString().split(' ');

monthDay = [0, 31,28,31,30,31,30,31,31,30,31,30,31];

dayofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let sumDay=0;
let index=0;

for (let i = 0; i < input[0]; i++) {
    sumDay += monthDay[i];    
}
console.log(parseInt(input[1]));
index = (sumDay + parseInt(input[1])) % 7;
console.log(dayofWeek[index]);