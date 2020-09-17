function revertStringAttribuite<T extends new (...args: any[]) => any>(
  target: T,
): T {
  console.log('The decorator was called')

  return class extends target {
    constructor(...args: any[]) {
      args = args.map((item) => {
        if (typeof item === 'string') {
          return item.split('').reverse().join('')
        }
        return item
      })
      super(...args)
    }
  }
}

@revertStringAttribuite
export class Animal {
  constructor(public color: string, public name: string, public age: number) {}
}

const animal = new Animal('purple', 'tiger', 20)
console.log(animal)
