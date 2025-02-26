"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').trim();
var AxB = input.split('x').map(Number);
console.log(AxB[0] * AxB[1]);
