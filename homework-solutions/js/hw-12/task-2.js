const STATUSES = {
  OK: 200,
  CREATED: 201,
};

function isCreated(status) {
  return status === STATUSES.CREATED;
}

async function createTodo(body) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(body),
    });
    if (!isCreated(response.status)) {
      throw new Error(`Unexpected status: ${response.status}`);
    }
    const data = await response.json();
    if (!isCreated(data.id)) {
      throw new Error(`Unexpected id: ${data.id}`);
    }
    return data;
  } catch (error) {
    throw new Error(`${error} something went wrong`);
  } finally {
    console.log('createTodo request: finished');
  }
}
const testbody = {
  userId: 404,
  title: 'test-title',
  completed: false,
  option: 'test',
};
const result = createTodo(testbody);
result.then((promise) => console.log(promise)).catch((error) => console.log(error));
