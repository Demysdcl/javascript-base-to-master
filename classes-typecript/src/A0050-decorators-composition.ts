interface Constructor {
  new (...args: any[]): any
}

function revertStringAttribuite(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log(`The decorator was called with params ${param1} and ${param2}`)

    return class extends target {
      constructor(...args: any[]) {
        args = args.map((item) => {
          if (typeof item === 'string') {
            return item.split('').reverse().join('') + ' ' + param1
          }
          return item + ' ' + param2
        })
        super(...args)
      }
    }
  }
}

function otherDecorator(target: Constructor) {
  console.log('The other decorator was called')
  return target
}

@otherDecorator
@revertStringAttribuite('is string', 'isn`t string')
export class Animal {
  constructor(public color: string, public name: string, public age: number) {}
}

const animal = new Animal('purple', 'tiger', 20)
console.log(animal)
