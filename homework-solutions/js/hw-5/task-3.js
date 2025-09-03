/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowelsCount = 0;
let consonantCount = 0;

for (let i = 0; i < word.length; i++) {
  let letter = word[i];
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    vowelsCount++;
  } else {
    consonantCount++;
  }
}
vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantCount} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
