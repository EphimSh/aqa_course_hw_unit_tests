import { AbstractUnit } from './abstract/AbstractUnit';
import { Department } from './Department';

export class Enterprise extends AbstractUnit {
  public departments: Department[];
  constructor(id: number, name: string, departments: Department[]) {
    super(id, name);
    this.departments = departments;
  }

  public addDepartmentByName(name: string): Department {
    const department = new Department(this.getNewDepartmentId(), name, 0);
    this.departments.push(department);
    return department;
  }

  public addEmployeesByDepartmentId(departmentId: number, employeeAmount: number): void {
    const department = this.departments?.find((department) => department.getId() === departmentId);
    department?.addEmployees(employeeAmount);
  }

  private getNewDepartmentId(): number {
    const departments = this.departments;
    if (departments.length === 0) return 1;
    return Math.max(...departments.map((department) => department.getId())) + 1;
  }

  public editDepartment(departmentId: number, departmentName: string): void {
    const department = this.departments?.find((department) => department.getId() === departmentId);
    department?.setName(departmentName);
  }

  public deleteDepartment(departmentId: number): boolean {
    const department = this.departments?.find((department) => department.getId() === departmentId);
    if (department?.getEmployeesCount() === 0) {
      const departmentIndex = this.departments?.findIndex((department) => department.getId() === departmentId);
      if (departmentIndex === -1) return false;
      this.departments?.splice(departmentIndex, 1);
      return true;
    } else return false;
  }

  public moveEmployees(from: number, to: number): void {
    const fromDepartment = this.departments.find((department) => department.getId() === from);
    const toDepartment = this.departments.find((department) => department.getId() === to);

    if (!this.isDepartment(fromDepartment) || !this.isDepartment(toDepartment)) {
      console.log(`${from} or ${to} not found`);
      return;
    }
    const movedEmployeesAmount = fromDepartment.getEmployeesCount();
    fromDepartment?.setEmployeesCount(0);
    toDepartment?.addEmployees(movedEmployeesAmount);
  }

  public getEnterpriseInfo(): string {
    let departmentsInfo = '';
    for (const department of this.departments) {
      departmentsInfo += ` - ${department.getDepartmentInfo()}\n`;
    }
    return `Предприятие: ${this.getName()} - (${this.countTotalEmployees()})\n${departmentsInfo}`;
  }

  private countTotalEmployees(): number {
    return this.departments.reduce((total, department) => total + department.getEmployeesCount(), 0);
  }

  private isDepartment(obj: unknown): obj is Department {
    return obj instanceof Department;
  }
}
