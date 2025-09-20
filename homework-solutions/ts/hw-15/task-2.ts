function getKeyByValue<T>(obj: T, val: T[keyof T]): keyof T | undefined {
  for (const key in obj) {
    if (Object.is(obj[key], val)) return key;
  }
  return undefined;
}
