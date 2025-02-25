"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var S = fs.readFileSync('/dev/stdin', 'utf8').trim();
var ans = S.split('').filter(function (char) { return char === '2'; }).join('');
//S.split('')は文字列を一文字ずつ分割して配列にする
// '20250222'.split('') 
// 結果: ['2', '0', '2', '5', '0', '2', '2', '2']
console.log(ans);
