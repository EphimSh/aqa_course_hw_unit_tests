import { Enterprise } from './Enterprise';
import { Department } from './Department';
import { enterprises } from './enterprises-array';

export function printEnterprisesInfo(enterprises: Enterprise[]): string {
  let result = '';
  for (const enterprise of enterprises) {
    result += ` ${enterprise.name} (${countTotalEmployees(enterprise.departments)} сотрудников)\n`;
    result += `${gatherAndPrintEnterpriseDepartmentsInfo(enterprise.departments)}`;
  }
  return result;
}

export function gatherAndPrintEnterpriseDepartmentsInfo(departments: Department[]): string {
  let result = '';
  for (const department of departments) {
    result += ` - ${department.name} (${department.employees_count} сотрудников)\n`;
  }
  return result;
}

export function countTotalEmployees(departments: Department[]): number {
  return departments.reduce((accumulator, { employees_count }) => accumulator + employees_count, 0);
}

export function getDepartmentName(department: Department): string {
  return department.name;
}

export function getDepartmentEmployeesAmount(department: Department): number {
  return department.employees_count;
}

export function getEnterpriseName(value: string | number): string {
  let result: string | number | undefined;
  if (typeof value === 'string') {
    result = enterprises.find((enterprise) =>
      enterprise.departments?.some((department) => department.name === value),
    )?.name;
    return result as string;
  } else if (typeof value === 'number') {
    result = enterprises.find((enterprise) =>
      enterprise.departments?.some((department) => department.id === value),
    )?.name;
    return result as string;
  } else {
    return 'Enterprise not found';
  }
}

export function addEnterprise(enterpriseName: string): void {
  let newId: number = incrementId(enterprises);
  const enterprise = new Enterprise(newId, `Предприятие "${enterpriseName}"`, [
    { id: 1, name: 'Отдел разработки', employees_count: 1 },
  ]);
  enterprises.push(enterprise);
}

function incrementId(enterprises: Enterprise[]): number {
  const enterpriseIds = getIds(enterprises);
  if (enterpriseIds.size === 0) {
    return 1;
  }
  return Math.max(...enterpriseIds) + 1;
}
function getIds(enterprises: Enterprise[] | Department[]): Set<number> {
  //todo typeof something
  return new Set(enterprises.map((enterprise) => enterprise.id));
}
