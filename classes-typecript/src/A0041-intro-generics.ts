type FilterCalback<U> = (value: U, index?: number, array?: U) => boolean

export function myFilter<T>(array: T[], callbackfn: FilterCalback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredArray = myFilter(array, (value) => value < 6)
console.log(filteredArray)
