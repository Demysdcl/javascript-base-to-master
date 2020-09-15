export class ShoppingCart {
  private readonly products: Product[] = []

  addProduct(...products: Product[]): void {
    products.forEach((prod) => this.products.push(prod))
  }

  quantityProducts(): number {
    return this.products.length
  }

  totalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const shoppinCart = new ShoppingCart()

shoppinCart.addProduct(
  new Product('Pant', 60),
  new Product('T-Shit', 50),
  new Product('Hat', 8.5),
  new Product('Suit', 10000),
)

console.log(shoppinCart)
console.log(shoppinCart.quantityProducts())
console.log(shoppinCart.totalPrice())
