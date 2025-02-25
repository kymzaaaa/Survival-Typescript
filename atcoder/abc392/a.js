"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
var A1 = input[0], A2 = input[1], A3 = input[2];
//3つの整数の中で一番大きい数字を出したい
var max = Math.max(A1, A2, A3);
//残りの二つの数字を掛け算して、maxの値と等しくなるか
if (A1 === max) {
    if (A2 * A3 === A1)
        console.log('Yes');
    else
        console.log('No');
}
else if (A2 === max) {
    if (A1 * A3 === A2)
        console.log('Yes');
    else
        console.log('No');
}
else {
    if (A1 * A2 === A3)
        console.log('Yes');
    else
        console.log('No');
}
