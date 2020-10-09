function Person(firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

const personPrototype = {
    firstname: 'Demys',
    lastname: 'Lima',
    age: 35,

    fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

Person.prototype = Object.create(personPrototype)
Person.prototype.constructor = Person

const person = new Person('Davi', 'Lima', 35)
console.log(person)
console.log(person.fullname());
