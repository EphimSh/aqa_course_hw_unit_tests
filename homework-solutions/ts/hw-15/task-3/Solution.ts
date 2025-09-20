import { Enterprise } from './Enterprise';
import { Department } from './Department';
import { enterprises } from './enterprises-array';
import { addEnterprise, getEnterpriseName, printEnterprisesInfo } from './helpers';

//task1
console.log(printEnterprisesInfo(enterprises));

//task2
console.log(getEnterpriseName('Отдел разработки'));
console.log(getEnterpriseName(4));

//task3
addEnterprise('blinb');
console.log(printEnterprisesInfo(enterprises));
console.log(enterprises[enterprises.length - 1].id);
