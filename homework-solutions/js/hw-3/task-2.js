/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

function concatinateNumber(num) {
  typeof num === "number" && num > 0
    ? console.log(num + Number(`${num}${num}`) + Number(`${num}${num}${num}`))
    : console.log("wrong type. gimme a positive number buddy");
}

// concatinateNumber(3);
// concatinateNumber("3");
// concatinateNumber(NaN);
// concatinateNumber(undefined);
// concatinateNumber(true);