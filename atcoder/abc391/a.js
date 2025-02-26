"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').trim();

if (input.length === 1) {
    if (input === "N") {
        console.log('S');
    }
    else if (input === "S") {
        console.log('N');
    }
    else if (input === "W") {
        console.log('E');
    }
    else {
        console.log('W');
    }
}
else {
    if (input === "NE") {
        console.log('SW');
    }
    else if (input === "NW") {
        console.log('SE');
    }
    else if (input === "SE") {
        console.log('NW');
    }
    else {
        console.log('NE');
    }
}
