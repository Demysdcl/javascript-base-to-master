export function checkType<U>(value: unknown, type: string): value is U {
  return typeof value === type
}

console.log(checkType<string>('Teste', 'string'))
console.log(checkType<string>('Teste', 'number'))
console.log(checkType(123, 'number'))
