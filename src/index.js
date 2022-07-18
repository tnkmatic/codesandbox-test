/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書きされました";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "letは上書き可能";
// console.log(val2);

// // letは再宣言ができない
// let val2 = "letは再宣言できない";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更は可能
// const val4 = {
//   name: "なまえ",
//   age: 39
// };
// val4.name = "なまえを上書き";
// val4.address = "東京";
// console.log(val4);

// // constで定義した配列はプロパティの変更は可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "なまえ";
const age = 28;
// 「私の名前はなまえです。年齢は28才です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
