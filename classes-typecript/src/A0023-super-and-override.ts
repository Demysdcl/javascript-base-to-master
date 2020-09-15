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
    return this.name + ' ' + this.lastname
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public courseClass: string,
  ) {
    super(name, lastname, age, cpf)
  }

  getFullname(): string {
    return `I am a student and my full name is ${super.getFullname()}`
  }
}
export class Client extends Person {
  getFullname(): string {
    return `I am a client and my full name is ${super.getFullname()}`
  }
}

const people = [
  new Person('Demys', 'Lima', 35, '547.985.202-27'),
  new Student('Demys', 'Lima', 35, '547.985.202-27', '10A'),
  new Client('Demys', 'Lima', 35, '547.985.202-27'),
]

people.forEach((person) => {
  console.log(person.getFullname())
})
