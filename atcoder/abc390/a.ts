import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const [a,b,c,d,e] = input.map(Number);
const arr = [a,b,c,d,e];

//配列の数字が昇順になっているかどうかを判定する関数
const isAscending = (arr: number[]): boolean => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

if (isAscending(arr)) {
    console.log('No');
    process.exit(0);
}

for (let i = 0; i < 4; i++) {
    let tmp = arr[i];
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

