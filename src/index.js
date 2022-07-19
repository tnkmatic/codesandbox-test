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
// const name = "なまえ";
// const age = 28;
// // 「私の名前はなまえです。年齢は28才です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("てすと"));

// // アロー関数
// const func2 = (str) => str; // 単一行のときに{}は不要、return文字列も不要。
// console.log(func2("アロー関数"));

// const func3 = (num1, num2) => {
//   return num1 + num2; // {}囲いの際は単一行でもreturn句は必要。
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "なまえ",
//   age: 39
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["z", "x"];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("おなまえ");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const arr8 = arr4; //参照渡しになる
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);
