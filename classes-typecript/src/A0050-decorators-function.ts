function functionDecorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototype)
  console.log(methodName)
  console.log(descriptor)

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase()
    },
  }
}

export class ClassWithFunction {
  @functionDecorator
  myMethod(msg: string): string {
    return msg
  }
}

const classWithFunction = new ClassWithFunction()

console.log(classWithFunction.myMethod('my method response'))
