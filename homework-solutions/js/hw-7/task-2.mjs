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
  let maxLen = words[0].length;
  let result = [];
  for (let i = 1; i <= words.=length - 1; i++) {
    if (maxLen < words[i].length) {
      result.push(words[i]);
    } else if (words[i].length === maxLen) {
    } else {
      continue;
    }
  }

  return result;
}
console.log(findLongestWords('The quick rown fox jumps'));
export { isPalindrom, findLongestWords };
