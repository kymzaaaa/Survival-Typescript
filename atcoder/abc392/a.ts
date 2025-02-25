import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const [A1,A2,A3] = input;

//3つの整数の中で一番大きい数字を出したい
const max = Math.max(A1,A2,A3);

//残りの二つの数字を掛け算して、maxの値と等しくなるか
if (A1 === max){
    if (A2 * A3 === A1)
        console.log('Yes');
    else
        console.log('No');
} else if (A2 === max){
    if (A1 * A3 === A2)
        console.log('Yes');
    else
        console.log('No');
} else {
    if (A1 * A2 === A3)
        console.log('Yes');
    else
        console.log('No');
}