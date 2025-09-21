import { AbstractUnit } from './abstract/AbstractUnit';

export class Department extends AbstractUnit {
  protected employeesCount: number;
  constructor(id: number, name: string, employeesCount: number) {
    super(id, name);
    this.employeesCount = employeesCount;
  }

  public getEmployeesCount(): number {
    return this.employeesCount;
  }

  public setEmployeesCount(value: number): void {
    this.employeesCount = value;
  }

  public addEmployees(value: number): void {
    this.employeesCount += value;
  }

  public getDepartmentInfo(): string {
    return `Отдел: ${this.getName()} (${this.getEmployeesCount()})`;
  }
}
