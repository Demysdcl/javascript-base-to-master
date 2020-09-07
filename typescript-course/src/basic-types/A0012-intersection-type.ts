type hasName = { name: string }
type hasLastname = { lastname: string }
type hasAge = { age: number }

type InterPerson = hasName & hasLastname & hasAge

const person: InterPerson = {
  name: 'Demys',
  lastname: 'Lima',
  age: 35,
}

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'D' | 'A'

type Intersection = AB & AC & AD

const intersection: Intersection

console.log(intersection)
