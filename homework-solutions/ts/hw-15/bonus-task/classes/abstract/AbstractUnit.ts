export abstract class AbstractUnit {
  protected id: number;
  protected name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }
}
