import * as fs  from 'fs';

const S = fs.readFileSync('/dev/stdin', 'utf8').trim();
//trim()は文字列の両端の空白を削除するメソッド

const ans = S.split('').filter(char => char === '2').join('');

//S.split('')は文字列を一文字ずつ分割して配列にする
// '20250222'.split('') 
// 結果: ['2', '0', '2', '5', '0', '2', '2', '2']
//その後、filterで条件に合致する要素だけを取り出す
// '20250222'.split('').filter(char => char === '2')
// 結果: ['2', '2', '2', '2']
//最後にjoinで配列を結合する
// '20250222'.split('').filter(char => char === '2').join('')
// 結果: '2222'


console.log(ans);