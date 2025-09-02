/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const wordsArr = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  if (!Array.isArray(wordsArr)) return [];
  return wordsArr
    .map((item, index) => {
      const vowelsCount = item.match(/[aeiou]/gi);
      return [item, vowelsCount ? vowelsCount.length : 0, index];
    })
    .sort((a, b) => a[1] - b[1] || a[2] - b[2])
    .map((item) => item[0]);
}

export { sortedByVowels };
