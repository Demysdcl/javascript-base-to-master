const personPrototype = {
    firstname: 'Demys',
    lastname: 'Lima',
    age: 30,

    fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

const anotherPerson = Object.create(personPrototype)
console.log(anotherPerson.firstname);
console.log(anotherPerson.fullname());
