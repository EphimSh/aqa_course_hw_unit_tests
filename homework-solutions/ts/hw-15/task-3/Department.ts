export class Department {
  id: number;
  name: string;
  employees_count: number;

  constructor(id: number, name: string, employees_count: number) {
    this.id = id;
    this.name = name;
    this.employees_count = employees_count;
  }
}
