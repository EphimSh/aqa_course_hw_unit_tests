/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let duplicateFound;
do {
  duplicateFound = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] === nums[i]) {
        nums.splice(j, 1);
        duplicateFound = true;
        j++;
      }
    }
  }
} while (duplicateFound);
unique = nums;
export { unique };
