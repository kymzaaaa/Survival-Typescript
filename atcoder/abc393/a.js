"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
var S1 = input[0], S2 = input[1];
if (S1 === 'fine' && S2 === 'fine')
    console.log(4);
else if (S1 === 'fine' && S2 === 'sick')
    console.log(3);
else if (S1 === 'sick' && S2 === 'fine')
    console.log(2);
else if (S1 === 'sick' && S2 === 'sick')
    console.log(1);
