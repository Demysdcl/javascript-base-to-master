interface PersonInterface {
  name: string
  lastname: string
  fullname(): string
}

interface EmployeeInterface {
  position: string
}

interface FullPerson extends PersonInterface, EmployeeInterface {}

export class Person implements PersonInterface, EmployeeInterface {
  constructor(
    public name: string,
    public lastname: string,
    public position: string,
  ) {}

  fullname(): string {
    return this.name + ' ' + this.lastname
  }
}

export class Person2 implements FullPerson {
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

const person2 = new Person2('Demys', 'Lima', 'Dev')

console.log(person2)
console.log(person2.fullname())
