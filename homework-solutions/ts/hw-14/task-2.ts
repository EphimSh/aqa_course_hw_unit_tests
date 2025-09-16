type CustomMapCallBack<T, U> = (value: T, index: number, array: T[]) => U;

function myCustomMap<T, U>(array: T[], callback: CustomMapCallBack<T, U>): U[] {
  const arr: U[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      arr[i] = callback(array[i] as T, i, array);
    }
  }
  return arr;
}
const arr3 = [1, 2, 3, 4, 5];
const multipliedByIndex = myCustomMap(arr3, (v, i) => v * i);

console.log(multipliedByIndex);
