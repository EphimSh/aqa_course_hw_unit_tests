//1
function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

delayTwoSeconds(() => {
  console.log('two seconds passed');
});

//2
const promise_1 = new Promise((resolve) => resolve(1));

promise_1.then((message) => console.log(`resolved with: ` + message));

//3
const promise_failed = new Promise((resolve, reject) => reject('rejected: promise failed'));
promise_failed.catch((message) => console.log(message));

//4
async function promiseNumber(value) {
  return new Promise((resolve, reject) => (typeof value === 'number' ? resolve(value) : reject(value)));
  // .then((value) => console.log(`promised number is: ${value}`))
  // .catch((value) => console.log(`${value} is not typeof number`));
}
//5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((values) => values.forEach((value) => console.log(`[ALL]:promised number is ${value}`)))
  .catch((value) => console.log(`${value} is not typeof number: Promise.all failed`));

//6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((promises) =>
  promises.forEach((promise) =>
    promise.status === 'fulfilled'
      ? console.log(`[ALL.SETTLED]:promised number is ${promise.value}`)
      : console.log(`${promise.value} is not type of number`),
  ),
);

// 7;
async function runAll() {
  try {
    const promises = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    promises.forEach((value) => console.log(`[ASYNC.ALL]: promised number is ${value} `));
  } catch (error) {
    console.log(`${error} is not typeof number: Promise.all failed`);
  }
}

async function runAllSettled() {
  try {
    const promises = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
      promiseNumber('4'),
    ]);
    promises.forEach((promise) =>
      promise.status === 'fulfilled'
        ? console.log(`[ASYNC.ALL.SETTLED]: promised number is ${promise.value}`)
        : console.log(`[ASYNC.ALL.SETTLED]: ${promise.reason} if not typeof number`),
    );
  } catch (error) {
    console.log(`${error} what?`);
  }
}

runAll();
runAllSettled();
