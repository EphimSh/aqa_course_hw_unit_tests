const num: number = 42;
const str: string = 'Hello, TypeScript';
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ['Minks', 'Warsaw', 'London'];

const person: object = {
  name: 'Alice',
  age: 30,
  city: 'Minsk',
};

type User = {
  name: string;
  age: number;
  email?: string;
};

type Grade = 'junior' | 'middle' | 'senior';

interface ICar {
  brand: string;
  model: string;
  year?: number;
}

interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface IFullAddress extends IAddress {
  country: string;
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type DiscountedProduct = Product & {
  discount: number;
};

function calculateDiscount(product: DiscountedProduct): number {
  return product.price - (product.price * product.discount) / 100;
}

const product: DiscountedProduct = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  discount: 10,
};

console.log(calculateDiscount(product));
