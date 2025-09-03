/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
const tempArr = [];
numbers.forEach((number) => {
  if (number % 3 === 0) tempArr.push(number);
});
let forEach = tempArr;
let map = numbers.map((number, index, numbers) => {
  return number - numbers.length;
});
let filter = numbers.filter((number, index, numbers) => {
  if (index === 0) return false;
  return number > numbers[index - 1];
});
let find = numbers.find((number, index) => {
  return index === number;
});
let sort = numbers.sort((i, j) => i - j);
let reduce = numbers.reduce((acc, el) => {
  return acc + el;
}, 0);
let some = numbers.some((number) => number > 90);
let every = numbers.every((number) => number >= 10);

export { forEach, map, filter, find, sort, reduce, some, every };
