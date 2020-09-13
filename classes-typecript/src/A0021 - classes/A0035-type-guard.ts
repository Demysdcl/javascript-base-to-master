export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}

console.log(add(1, 2))
console.log(add('1', '2'))

type Person = { type: 'person'; name: string }
type Animal = { type: 'animal'; nickname: string }
type PersonOrAnimal = Person | Animal

function showAttribuite(obj: PersonOrAnimal): void {
  switch (obj.type) {
    case 'person':
      console.log(obj.name)
      break
    case 'animal':
      console.log('This is a animal and its nickname is', obj.nickname)
  }
}

showAttribuite({ type: 'person', name: 'Demys' })
showAttribuite({ type: 'animal', nickname: 'Chico' })
