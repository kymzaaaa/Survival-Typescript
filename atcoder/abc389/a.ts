import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const AxB = input.split('x').map(Number);

console.log(AxB[0] * AxB[1]);