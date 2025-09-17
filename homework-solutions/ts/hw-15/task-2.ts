function getKeyByValue<T, K extends keyof T>(obj: T, val: T[K]): K | undefined {
  for (const k in obj) {
    const key = k as keyof T;
    if (Object.is(obj[key], val)) return key as K;
  }
  return undefined;
}

const obj = { name: 'bill', age: 55, isManager: true };
const key1 = getKeyByValue(obj, 'bill');
console.log(key1);
console.log(obj[key1!]);
