function propertyDecorator(classPrototype: any, name: string | symbol) {
  console.log(classPrototype)
  console.log(name)

  let propertyValue: any

  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('')
        return
      }
      propertyValue = value
    },
  }
}

export class ClassWithProperties {
  @propertyDecorator
  name: string
  @propertyDecorator
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  myMethod(msg: string): string {
    return this.name + ' ' + this.age + ' ' + msg
  }
}

const classWithProperties = new ClassWithProperties('Demys', 35)
console.log(classWithProperties.myMethod(" It's works"))
