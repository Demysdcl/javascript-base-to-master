export class Person {
  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  static sayHi(): void {
    console.log('Hi')
  }

  getFullname(): string {
    return this.name + '' + this.lastname
  }
}

Person.sayHi()
