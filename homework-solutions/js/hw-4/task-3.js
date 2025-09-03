/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
function ageCheck(item) {
  const minAge = 18;
  const maxAge = 60;
  age = Number(item);
  if (isNaN(age)) {
    console.log(`Technical work`);
    return;
  }

  if (age < minAge) {
    console.log(`You don't have access cause your age is ${age} It's less then ${minAge}`);
  } else if (age >= minAge && age < maxAge) {
    console.log(`Welcome  !`);
  } else if (age >= maxAge) {
    console.log(`Keep calm and look Culture channel`);
  }
}

const testData = [10, 17, 18, 19, 59, 60, 61, 101, '100', '2', '-5', 'five'];
testData.forEach((item) => {
  ageCheck(item);
});
