/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  const str = word.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];

  let words = sentence.toLowerCase().trim().split(/\s+/);
  if (words.length === 1 && words[0] === '') return [];

  let longest = words[0];
  let result = [longest];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
      result = [longest];
    } else if (words[i].length === longest.length) {
      result[result.length] = words[i];
    }
  }

  return result;
}
console.log(findLongestWords('The quick rown fox jumps'));
export { isPalindrom, findLongestWords };
