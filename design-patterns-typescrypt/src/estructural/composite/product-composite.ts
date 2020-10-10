/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ProductComponent {
  getPrice(): number
}

export class ProductLeaf implements ProductComponent {
  constructor(public name: string, public price: number) {}

  getPrice(): number {
    return this.price
  }
}

export class ProductComposite implements ProductComponent {
  private children: ProductComponent[] = []

  add(...products: ProductComponent[]): void {
    products.forEach((item) => this.children.push(item))
  }

  remove(product: ProductComponent): void {
    const indexOf = this.children.indexOf(product)
    indexOf > -1 && this.children.splice(indexOf, 1)
  }

  getPrice(): number {
    return this.children.reduce((sum, prod) => sum + prod.getPrice(), 0)
  }
}

const pen = new ProductLeaf('Caneta', 1)
const smartphone = new ProductLeaf('Smartphone', 1000)
const tshirt = new ProductLeaf('camisa', 10)
const productBox = new ProductComposite()

productBox.add(pen, smartphone, tshirt)

const tablet = new ProductLeaf('Tablet', 2200)
const kindle = new ProductLeaf('Kindle', 600)
const anotherBox = new ProductComposite()
anotherBox.add(tablet, kindle)

productBox.add(anotherBox)

console.log(productBox)
console.log(productBox.getPrice())
