function getAvgSalary<T extends { salary: number }>(...objects: T[]): number {
  const total = objects.reduce((acc, obj) => acc + obj.salary, 0);
  return total / objects.length;
}
const avg1 = getAvgSalary({ salary: 1000 }, { salary: 2000 }, { salary: 3000 });

const avg2 = getAvgSalary({ name: 'Alice', salary: 5000 }, { name: 'Bob', salary: 7000 });

const avg3 = getAvgSalary(
  { id: 1, salary: 1200 },
  { id: 2, salary: 1800 },
  { id: 3, salary: 2400 },
  { id: 4, salary: 3600 },
);

const avg4 = getAvgSalary({ salary: 10000, position: 'Manager' }, { salary: 20000, position: 'Director' });

console.log(avg1);
console.log(avg2);
console.log(avg3);
console.log(avg4);
