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
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
    const trimmed = value.trim();
    if (trimmed.length < 2 || trimmed.length > 50 || !/^[A-Za-z ]+$/.test(trimmed)) {
      throw new Error(`${value} should be latin olny, and greater than 2 letters and less than 50.`);
    }
    this._firstName = trimmed;
  }
  set lastName(value) {
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
    const trimmed = value.trim();
    if (trimmed.length < 2 || trimmed.length > 50 || !/^[A-Za-z ]+$/.test(trimmed)) {
      throw new Error(`${trimmed} should be latin olny, and greater than 2 letters and less than 50.`);
    }
    this._lastName = trimmed;
  }
  set profession(value) {
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
    const trimmed = value.trim();
    if (trimmed.length === 0) throw new Error('123');
    if (!/^[A-Za-z ]+$/.test(trimmed)) throw new Error('123');
    this._profession = trimmed;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value)) throw new Error(`${value} is not a number`);
    if (value <= 0 || value >= 10000) throw new Error(`${value} should be less than 10000 and greater than 0`);
    this.#salary = value;
  }
}

// let emp1 = new Employee('Petr', 'Petrov', 'L1', 200);
// console.log(`${emp1._firstName}\n${emp1._lastName}\n${emp1._profession}\n${emp1.salary}`);

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
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
    this._title = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set address(value) {
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
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
  findEmployeeByName(value) {
    if (typeof value !== 'string') throw new Error(`${value} is not a string`);
    const emp = this.#employees.find((obj) => obj._firstName === value);
    if (!emp) throw new Error(`Emloyees not found`);
    return emp;
  }
  removeEmployee(firstName) {
    if (typeof firstName !== 'string') throw new Error(`${firstName} is not a string`);
    const employeeIndex = this.getEmployeeIndex(firstName);
    if (employeeIndex === -1) {
      throw new Error(``);
    } else {
      this.#employees.splice(employeeIndex, 1);
    }
  }
  getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string') throw new Error(`${firstName} is not a string`);
    const index = this.#employees.findIndex((obj) => obj._firstName === firstName);
    return index;
  }
  getTotalSalary() {
    let result = 0;
    if (this.#employees.length === 0) return 0;
    this.#employees.forEach((obj) => {
      result += obj.salary;
    });
    return result;
  }
}

export { Employee, Company };
