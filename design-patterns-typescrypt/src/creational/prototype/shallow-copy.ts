import { Address } from './shallow-copy'
export interface Prototype {
  clone(): Prototype
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = []

  constructor(public name: string, public age: number) {}

  clone(): Prototype {
    return Object.create(this)
  }

  addAddress(addess: Address) {
    this.addresses.push(addess)
  }
}

const address = new Address('Alagoas', 1787)
const person1 = new Person('Demys', 35)
person1.addAddress(address)
person1.addresses[0].street = 'Pernambuco'

const person2 = person1.clone()

person2.name = 'Davi'
console.log(person2)
console.log(person2.name)
console.log(person2.addresses)
