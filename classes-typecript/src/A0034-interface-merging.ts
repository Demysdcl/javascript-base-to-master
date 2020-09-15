interface Person {
  name: string
  lastname: string
  fullname(): string
}

interface Person {
  position: string
}

export class Person2 implements Person {
  constructor(
    public name: string,
    public lastname: string,
    public position: string,
  ) {}

  fullname(): string {
    return this.name + ' ' + this.lastname
  }
}

const person = new Person2('Demys', 'Lima', 'Dev')

console.log(person)
console.log(person.fullname())

const person2 = new Person2('Demys', 'Lima', 'Dev')

console.log(person2)
console.log(person2.fullname())
