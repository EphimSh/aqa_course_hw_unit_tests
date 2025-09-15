function wrapInArray<T>(value: T): T[] {
  return [value];
}

const strArr = wrapInArray('heelloo');
const numArr = wrapInArray(5);
console.log(strArr);
console.log(numArr);

function getLastElement<T>(value: T[]): T {
  return value[value.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(['a', 'b', 'c']));

interface IPair<T, U> {
  first: T;
  second: U;
}
function describePair<T, U>(obj: IPair<T, U>): string {
  return `${obj.first} and ${obj.second}`;
}
console.log(describePair({ first: 'Alice', second: 30 }));
