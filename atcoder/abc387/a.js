"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
var _a = input.split(' ').map(Number), num1 = _a[0], num2 = _a[1];
var ans = (num1 + num2) * (num1 + num2);
console.log(ans);
