type PersonType = {
  name: string
  lastname: string
  fullname(): string
}

type EmployeeType = {
  position: string
}

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

const person = new Person('Demys', 'Lima', 'Dev')

console.log(person)
console.log(person.fullname())
