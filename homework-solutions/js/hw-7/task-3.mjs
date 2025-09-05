/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (typeof number !== 'number') throw new Error('not a number');
  if (number <= 0) return 0;
  if (number <= 9) return number;
  let sum = 0;
  let copiedNum = number;
  for (let i = 0; copiedNum > 0; i++) {
    sum += copiedNum % 10;
    copiedNum = Math.floor(copiedNum / 10);
  }
  return digitalRoot(sum);
}
console.log(digitalRoot(19));

export { digitalRoot };
