type Adder = {
  (x: number): number
  (x: number, y: number): number
  (x: number, y: number, ...args: number[]): number
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  const secondParam = y || 0
  return args.length > 0
    ? args.reduce((acc, cur) => acc + cur, x + secondParam)
    : x + secondParam
}

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 2, 3))
