interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}
const QA: IEmployee = {
  name: 'Dale Cooper',
  salary: 2000,
  isManager: false,
};
type EmployeeKeys = keyof IEmployee;
type QAKeys = keyof typeof QA;
type UserType = typeof QA;
type PartialPropsEmployee = Partial<IEmployee>;
type PickNameAndSalary = Pick<IEmployee, 'name' | 'salary'>;
type IsNotManager = Omit<IEmployee, 'isManager'>;
type ReadOnlyPropsEmployee = Readonly<IEmployee>;

const AQA: Record<string, keyof typeof QA> = {
  name: 'name',
  salary: 'salary',
  isManager: 'isManager',
};
