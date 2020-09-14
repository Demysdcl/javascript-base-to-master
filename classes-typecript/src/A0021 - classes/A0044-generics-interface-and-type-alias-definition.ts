export interface IdentificationProtocol<T = string, U = number> {
  firstname: T
  lastname: T
  age: U
}

const student: IdentificationProtocol = {
  firstname: 'Demys',
  lastname: 'Lima',
  age: 35,
}

console.log(student)

const machine: IdentificationProtocol<number, number> = {
  firstname: 123,
  lastname: 456,
  age: 300,
}

console.log(machine)
