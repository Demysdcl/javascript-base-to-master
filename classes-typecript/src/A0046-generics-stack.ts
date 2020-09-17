export class Stack<T> {
  private counter = 0
  private elements: { [k: number]: T } = {}

  push(element: T): void {
    this.elements[this.counter] = element
    this.counter++
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined
    this.counter--
    const element = this.elements[this.counter]
    delete this.elements[this.counter]
    return element
  }

  isEmpty(): boolean {
    return this.counter === 0
  }
}

const stack = new Stack<number>()
for (let i = 0; i < 13; i++) {
  stack.push(i)
}

while (!stack.isEmpty()) {
  console.log(stack.pop())
}
