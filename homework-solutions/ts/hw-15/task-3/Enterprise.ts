import { Department } from '../task-3/Department';

export class Enterprise {
  id: number;
  name: string;
  departments: Department[];

  constructor(id: number, name: string, departments: Department[]) {
    this.id = id;
    this.name = name;
    this.departments = departments;
  }
  
}
