/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrs) {
  const newArr = [];
  for (let item of arrs) {
    newArr.push(...item);
  }
  return newArr;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его.
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем.
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let result = '';
  let words = sentence.toLowerCase().trim().split(/\s+/);
  let word = '';
  if (sentence == '') {
    return result;
  } else if (words.length < 2) {
    result += words;
    return result;
  }
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      word = String(words[i].charAt(0).toUpperCase() + String(words[i].slice(1)));
      result += `_${word}`;
    }
  }

  return result;
}
console.log(devideBy('I am super engineer'));
/*
  3. Фибоначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let result;
  if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n) || n < 0) {
    throw new Error('n must be an integer >= 0');
  }
  if (n < 2) return n;
  let last = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    result = last + curr;
    last = curr;
    curr = result;
  }
  return result;
}
// console.log(fibonacci(5));
export { mergeArrays, fibonacci, devideBy };
