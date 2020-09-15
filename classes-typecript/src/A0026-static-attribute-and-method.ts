export class Person {
  static defaultAge = 30
  static defaultCpf = '000.000.000-00'

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, 30, '000.000.000-00')
  }

  static sayHi(): void {
    console.log('Hi')
  }

  commonMethod(): void {
    console.log(Person.defaultAge, Person.defaultCpf)
  }

  getFullname(): string {
    return this.name + '' + this.lastname
  }
}

Person.sayHi()

const createdPerson = Person.createPerson('Demys', 'Lima')
console.log(createdPerson)
createdPerson.commonMethod()
