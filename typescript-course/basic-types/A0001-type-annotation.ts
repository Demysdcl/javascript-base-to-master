/* eslint-disable */

// Primitive
let firstname: string
let idade: number
let isAdult: boolean
let mySymbol: symbol

// Array
const arrayOfNumber: Array<number> = [1, 2, 3]
const arrayOfNumber2: number[] = [1, 2, 3]
const arrayOfString: Array<string> = ['a', 'b', 'c']
const arrayOfString2: string[] = ['a', 'b', 'c']

// Objects
const person: {name: string, age: number, isAdult?: boolean} = {
  name: 'Demys',
  age: 35,
}

// Function
function sum(x: number, y: number): number {
  return x + y
}

function otherSum: (x: number, y: number) => number = (x, y) => x + y
