export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age
  }

  getCpf(): string {
    return this.cpf
  }

  getFullname(): string {
    return this.name + '' + this.lastname
  }
}

export class Student extends Person {}
export class Client extends Person {}

const people = [
  new Person('Demys', 'Lima', 35, '547.985.202-27'),
  new Student('Demys', 'Lima', 35, '547.985.202-27'),
  new Client('Demys', 'Lima', 35, '547.985.202-27'),
]

people.forEach((person) => {
  console.log(person.getFullname())
})
