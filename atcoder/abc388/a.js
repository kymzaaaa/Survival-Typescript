"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
var str = input[0] + "UPC";
console.log(str);
