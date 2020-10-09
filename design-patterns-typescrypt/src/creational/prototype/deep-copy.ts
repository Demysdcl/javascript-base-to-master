export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {

    constructor(public street: string, public number: number){}

    clone(): Prototype {
        return new Address(this.street, this.number)
    }

}

export class Person implements Prototype {
    public addresses: Address[] = []

    constructor(public name: string, public age: number) {}

    clone(): Prototype {
        const clone1 = new Person(this.name, this.age)
        clone1.addresses = this.addresses.map(item => item.clone())
        return clone1
    }

    addAddress(addess: Address) {
        this.addresses.push(addess)
    }
}

const address = new Address('Alagoas', 1787)
const person1 = new Person('Demys', 35)
person1.addAddress(address)

const person2 = person1.clone()

person1.addresses[0].street = 'Pernambuco'

person2.name = 'Davi'
console.log(person2);
console.log(person2.name);
console.log(person2.addresses);
