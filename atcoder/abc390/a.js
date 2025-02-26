"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
var _a = input.map(Number), a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4];
var arr = [a, b, c, d, e];
//配列の数字が昇順になっているかどうかを判定する関数
var isAscending = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};
if (isAscending(arr)) {
    console.log('No');
    process.exit(0);
}
for (var i = 0; i < 4; i++) {
    var tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
    if (isAscending(arr)) {
        console.log('Yes');
        process.exit(0);
    }
    tmp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = tmp;
}
console.log('No');
