export function createError(): never {
  throw new Error('So bad!')
}

createError()
