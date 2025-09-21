import { AbstractUnitStorage } from '../abstract/AbstractUnitStorage';
import { Department } from '../Department';
import { Enterprise } from '../Enterprise';

export class EnterpriseStorage extends AbstractUnitStorage<Enterprise> {
  private createEnterprise(name: string): Enterprise {
    return new Enterprise(this.getNewId(), name, []);
  }

  public addEnterprises(...enterprises: Enterprise[]): void {
    enterprises.forEach((enterprise) => {
      if (this.isEnterprise(enterprise)) {
        this.units.push(enterprise);
      }
    });
  }

  public addEnterpriseByName(name: string): Enterprise {
    const newEnterprise: Enterprise = this.createEnterprise(name);
    this.units.push(newEnterprise);
    return newEnterprise;
  }

  public addDepartmentByEnterpriseId(enterpriseId: number, departmentName: string): boolean {
    const enterprise = this.units.find((enterprise) => enterprise.getId() === enterpriseId);
    if (!this.isEnterprise(enterprise)) return false;
    enterprise.addDepartmentByName(departmentName);
    return true;
  }

  public editEnterprise(enterpriseId: number, enterpriseName: string): void {
    const enterprise = this.units.find((enterprise) => enterprise.getId() === enterpriseId);
    enterprise?.setName(enterpriseName);
  }

  public deleteEnterprise(enterpriseId: number): boolean {
    const enterpriseIndex = this.units.findIndex((enterprise) => enterprise.getId() === enterpriseId);
    if (enterpriseIndex === -1) return false;
    this.units.splice(enterpriseIndex, 1);
    return true;
  }

  public getEnterpriseName(value: string): string;
  public getEnterpriseName(value: number): string;

  public getEnterpriseName(value: string | number): string {
    const match =
      typeof value === 'string'
        ? (department: Department) => department.getName() === value
        : (department: Department) => department.getId() === value;
    const enterprise = this.units.find((enterpise) => enterpise.departments?.some(match));
    return `Предприятие ${enterprise?.getName() ?? 'Предприятие не найдено'}`;
  }

  public getEnterpriseByName(enterpriseName: string): Enterprise {
    const enterpise = this.units.find((enterprise) => enterprise.getName() === enterpriseName);
    if (!enterpise) throw new Error('Enterprise not found');
    return enterpise;
  }

  public getEnterpriseById(enterpriseId: number): Enterprise {
    const enterpise = this.units.find((enterprise) => enterprise.getId() === enterpriseId);
    if (!enterpise) throw new Error('Enterprise not found');
    return enterpise;
  }

  private isEnterprise(obj: unknown): obj is Enterprise {
    return obj instanceof Enterprise;
  }

  public printEnterprisesInfo(): void {
    let result = this.units.map((enterprise) => enterprise.getEnterpriseInfo()).join('');
    console.log(result);
  }
}
