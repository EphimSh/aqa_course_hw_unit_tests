class Employee {
  #salary = 600;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    if (typeof value != 'string') throw new Error(`${value} is not a string`);
    this._firstName = value;
  }
  set lastName(value) {
    if (typeof value != 'string') throw new Error(`${value} is not a string`);
    this._lastName = value;
  }
  set profession(value) {
    if (typeof value != 'string') throw new Error(`${value} is not a string`);
    this._profession = value;
  }
  setSalary(value) {
    this.#salary += value;
  }
  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

const emp1 = new Employee('Darina', 'Volkova', 'L3 Engineer', 1800);
const emp2 = new Employee('Vasilisa', 'Volkova', 'L2 Engineer', 1200);
const emp3 = new Employee('Galina', 'Pupkova', 'L1 Engineer', 800);
const empArr = [emp1, emp2, emp3];
empArr.forEach((obj) => console.log(obj.firstName));

empArr.forEach((obj) => {
  obj.profession = 'QA';
  obj.setSalary(2000);
});

empArr.forEach((obj) => console.log(`${obj.firstName} ${obj.lastName} ${obj.profession} ${obj.salary}`));

class Company {
  // Ваш код
}

// export { Employee, Company };
