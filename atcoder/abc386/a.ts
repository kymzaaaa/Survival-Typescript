import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const [a,b,c,d] = input.split(' ').map(Number);

//reduce関数とは、配列の各要素に対して順番に処理を行い、最終的に1つの値にまとめる関数
//accは初期値、curは配列の要素
//{} as {[key: number]: number}は型アサーション
//型アサーションとは、型を明示的に指定すること
//Object.valuesはオブジェクトの値の配列を返す
function countSameNum(arr: number[]): number[] {
    const obj = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {} as {[key: number]:number});
    return Object.values(obj);
}

const sameNum = countSameNum([a,b,c,d]);

if((sameNum[0] === 2 && sameNum[1] === 2) || (sameNum[0] === 1 && sameNum[1] === 3)|| (sameNum[0] === 3 && sameNum[1] === 1)) {
    console.log('Yes');
} else {
    console.log('No');
}