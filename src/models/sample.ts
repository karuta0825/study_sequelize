
export default class Person {
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public call(): string {
    return this.name;
  }
}
