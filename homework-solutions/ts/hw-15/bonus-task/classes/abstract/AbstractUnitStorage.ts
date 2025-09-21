import { AbstractUnit } from './AbstractUnit';

export abstract class AbstractUnitStorage<T extends AbstractUnit> {
  protected units: T[] = [];

  getName(name: string): string | undefined {
    return this.units.find((unit) => unit.getName() === name)?.getName();
  }

  getId(id: number): number | undefined {
    return this.units.find((unit) => unit.getId() === id)?.getId();
  }

  getIds(): number[] {
    return this.units.map((unit) => unit.getId());
  }
  getNames(): string[] {
    return this.units.map((unit) => unit.getName());
  }

  protected getNewId(): number {
    if (this.units.length === 0) return 1;
    return Math.max(...this.units.map((unit) => unit.getId())) + 1;
  }
}
