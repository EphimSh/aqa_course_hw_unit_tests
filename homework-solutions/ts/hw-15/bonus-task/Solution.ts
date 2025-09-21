import { Department } from './classes/Department';
import { Enterprise } from './classes/Enterprise';
import { EnterpriseStorage } from './classes/storage/EnterpriseStorage';

const enterprise0 = new Enterprise(1, 'test0', [
  new Department(101, 'Java Development', 7),
  new Department(102, 'QA', 3),
  new Department(103, 'Analytics', 2),
  new Department(104, 'Management', 1),
]);

const enterprise1 = new Enterprise(2, 'test1', [
  new Department(201, 'Frontend', 8),
  new Department(202, 'Golang', 5),
  new Department(203, 'QA', 4),
  new Department(204, 'Management', 2),
]);

const enterprise2 = new Enterprise(3, 'test2', [
  new Department(301, 'TypeScript Development', 6),
  new Department(302, 'Analytics', 5),
  new Department(303, 'QA', 3),
  new Department(304, 'Management', 2),
]);

const enterprise3 = new Enterprise(4, 'test3', [
  new Department(401, 'Go Services', 5),
  new Department(402, 'Rust Systems', 4),
  new Department(403, 'QA', 3),
  new Department(404, 'Analytics', 2),
]);

const enterprise4 = new Enterprise(5, 'test4', [
  new Department(501, 'C# .NET', 7),
  new Department(502, 'PHP Backend', 4),
  new Department(503, 'QA', 3),
  new Department(504, 'Management', 2),
]);

//arrange
const enterprises = new EnterpriseStorage();
enterprises.addEnterprises(enterprise0, enterprise1, enterprise2, enterprise3, enterprise4);

//task1
enterprises.printEnterprisesInfo();

//task2
const task2_1 = enterprises.getEnterpriseName(203);
const task2_2 = enterprises.getEnterpriseName('TypeScript Development');
console.log(task2_1);
console.log(task2_2);

//task3
enterprises.addEnterpriseByName('new test enterpise');
const newEnterprise = enterprises.getEnterpriseByName('new test enterpise');
console.log(newEnterprise.getEnterpriseInfo());

//task4
enterprises.addDepartmentByEnterpriseId(newEnterprise.getId(), 'QA');
enterprises.addDepartmentByEnterpriseId(newEnterprise.getId(), 'TypeScript Development');
enterprises.addDepartmentByEnterpriseId(newEnterprise.getId(), 'Management');
enterprises.addDepartmentByEnterpriseId(newEnterprise.getId(), 'Analytics');
console.log(newEnterprise.getEnterpriseInfo());

//task5
enterprises.editEnterprise(newEnterprise.getId(), 'supatest');
console.log(newEnterprise.getEnterpriseInfo());

//task6
newEnterprise.editDepartment(1, 'AQA');
console.log(newEnterprise.getEnterpriseInfo());

//task7
const delete_this_enterprise = enterprises.addEnterpriseByName('enterprisetodelete');
console.log(delete_this_enterprise.getEnterpriseInfo());
console.log(enterprises.deleteEnterprise(delete_this_enterprise.getId()));

//task8
newEnterprise.deleteDepartment(3);
console.log(newEnterprise.getEnterpriseInfo());

//task9
newEnterprise.addEmployeesByDepartmentId(2, 10);
console.log(newEnterprise.getEnterpriseInfo());
newEnterprise.moveEmployees(2, 1);
console.log(newEnterprise.getEnterpriseInfo());
