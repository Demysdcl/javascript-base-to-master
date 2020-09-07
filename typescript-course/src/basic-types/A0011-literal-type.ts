const x = 10
let y = 100 as const //eslint-disable-line
let z:100 = 100 //eslint-disable-line

const person = {
  name: 'Demys' as const,
  lastname: 'Lima',
}

// operation not permitted
person.name = 'Davi'

function selectColor(color: 'Red' | 'Blue' | 'Yellow') {
  return color
}

export default person
