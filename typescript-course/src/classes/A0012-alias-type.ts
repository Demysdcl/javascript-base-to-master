type Age = number

type RGBColor = 'Red' | 'Green' | 'Blue'
type CMYKColor = 'Cyan' | 'Magento' | 'Yellow' | 'Black'

type FavoriteColor = RGBColor | CMYKColor

type Person = {
  name: string
  age: Age
  salary: float
  favoriteColor?: FavoriteColor
}

const person: Person = {
  age: 35,
  name: 'Demys',
  salary: 200_000,
}

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color }
}

console.log(setFavoriteColor(person, 'Blue'))
