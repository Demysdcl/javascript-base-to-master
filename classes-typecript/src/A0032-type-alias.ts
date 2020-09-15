type PersonType = {
  name: string
  lastname: string
  fullname(): string
}

type EmployeeType = {
  position: string
}

type FullPersonType = PersonType & EmployeeType

export class Person implements PersonType, EmployeeType {
  constructor(
    public name: string,
    public lastname: string,
    public position: string,
  ) {}

  fullname(): string {
    return this.name + ' ' + this.lastname
  }
}

export class Person2 implements FullPersonType {
  constructor(
    public name: string,
    public lastname: string,
    public position: string,
  ) {}

  fullname(): string {
    return this.name + ' ' + this.lastname
  }
}

const person = new Person('Demys', 'Lima', 'Dev')
const person2 = new Person2('Demys2', 'Lima', 'Dev')

console.log(person)
console.log(person.fullname())

console.log(person2)
console.log(person2.fullname())
