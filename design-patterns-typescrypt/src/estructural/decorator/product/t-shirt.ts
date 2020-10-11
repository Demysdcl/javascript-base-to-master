import { ProductProtocol } from './product-protocol'
export class TShirt implements ProductProtocol {
  private name = 'T-Shirt'
  private price = 49.9

  getPrice(): number {
    return this.price
  }
  getName(): string {
    return this.name
  }
}
