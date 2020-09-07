export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value)
}

export function concatArgs(...args: string[]): string {
  return args.reduce((acc, value) => acc + value)
}

export function toUppercaseArgs(...args: string[]): string[] {
  return args.map((tx) => tx.toUpperCase())
}

console.log(multiplyArgs(1, 2, 3))
console.log(concatArgs('a', 'b', 'c'))
console.log(concatArgs('a', 'b', 'c'))

// readonly
const array0: readonly string[] = ['Demys', 'Lima']
const array7: ReadOnlyArray<string> = ['Demys', 'Lima']
