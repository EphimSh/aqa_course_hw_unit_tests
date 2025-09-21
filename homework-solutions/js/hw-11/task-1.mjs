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
  set salary(value) {
    if (typeof value != 'number') throw new Error(`${value} is not a number`);
    if (value < 0) throw new Error(`${value} should be positive number`);
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// const emp1 = new Employee('Darina', 'Volkova', 'L3 Engineer', 1800);
// const emp2 = new Employee('Vasilisa', 'Volkova', 'L2 Engineer', 1200);
// const emp3 = new Employee('Galina', 'Pupkova', 'L1 Engineer', 800);
// const empArr = [emp1, emp2, emp3];

// empArr.forEach((obj) => {
//   obj.profession = 'QA Engineer';
//   obj.salary = 3000;
// });

// empArr.forEach((obj) =>
//   console.log(`Fullname: ${obj._firstName} ${obj._lastName}\nProfession: ${obj._profession}\nSalary: ${obj.salary}\n`),
// );

class Company {
  #employees;
  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = Array.isArray(employees) ? employees : [];
  }

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  set title(value) {
    if (typeof value != 'string') throw new Error(`${value} is not type of string`);
    this._title = value;
  }

  set phone(value) {
    if (isNaN(Number(value))) throw new Error(`${value} is not a number`);
    this._phone = value;
  }

  set address(value) {
    if (typeof value != 'string') throw new Error(`${value} is not a string`);
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error(`${empployee} is not instanceof Employee.class`);
    this.#employees.push(employee);
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
