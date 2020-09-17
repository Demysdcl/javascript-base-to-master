function paramDecorator(
  classPrototype: any,
  methodName: string,
  index: number,
) {
  console.log(classPrototype)
  console.log(methodName)
  console.log(index)
}

export class ClassWithParams {
  constructor(
    @paramDecorator public name: string,
    @paramDecorator public age: number,
  ) {}

  myMethod(@paramDecorator msg: string): string {
    return msg
  }
}

const classWithParams = new ClassWithParams('Demys', 35)

console.log(classWithParams.myMethod('my method response'))
