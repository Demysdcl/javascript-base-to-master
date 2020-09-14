export function unionObjects<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const obj1 = { key1: 'value1' }
const obj2 = { key2: 'value2' }

console.log(unionObjects(obj1, obj2))
