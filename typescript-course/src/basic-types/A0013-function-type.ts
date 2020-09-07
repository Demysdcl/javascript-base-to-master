type MapStringCallback = (item: string) => string

export function mapStrins(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]))
  }

  return newArray
}

const abcMapped = mapStrins(['a', 'b', 'c'], (item) => item.toUpperCase())

console.log(abcMapped)
