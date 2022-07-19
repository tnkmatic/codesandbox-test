/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["山田", "佐藤", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// 新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// ループした処理を実装する
// nameArr.map((name) => console.log(name));
// indexも引数にとれる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // 条件に一致するもののみ返却される
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
