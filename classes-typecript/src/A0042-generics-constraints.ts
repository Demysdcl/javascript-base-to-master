// The 'K' has a constraint, it must be a key present in T
function getAttribuiteValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key]
}

const myObj = {
  address: 'Here',
  city: 'Neverland',
}

console.log(getAttribuiteValue(myObj, 'address'))
console.log(getAttribuiteValue(myObj, 'city'))
