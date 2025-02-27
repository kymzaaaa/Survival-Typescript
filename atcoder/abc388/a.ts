import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const str = input[0] + "UPC";

console.log(str);