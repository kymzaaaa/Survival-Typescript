import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const [num1, num2] = input.split(' ').map(Number);

const ans = (num1 + num2) * (num1 + num2);

console.log(ans);