import * as fs from 'fs';

const input: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const [S1,S2] = input;

if (S1 === 'fine' && S2 === 'fine') 
    console.log(4);
else if (S1 ==='fine' && S2 === 'sick')
    console.log(3);
else if (S1 === 'sick' && S2 === 'fine')
    console.log(2);
else if (S1 === 'sick' && S2 === 'sick')
    console.log(1);