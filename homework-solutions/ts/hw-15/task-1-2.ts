interface IVehicle {
  getDetails(): string;
  start(): `The vehicle is starting` | string;
}

abstract class Vehicle implements IVehicle {
  public make: string;
  public model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }
  abstract getDetails(): string;
}

class Car extends Vehicle {
  public year: number;
  constructor(make: string, model: string, year: number) {
    super(make, model);
    this.year = year;
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const car = new Car('Chevrolet', 'Suburban', 1999);
console.log(car.start());
console.log(car.getDetails());
