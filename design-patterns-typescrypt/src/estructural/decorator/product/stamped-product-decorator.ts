import { ProductDecorator } from './product-decorator'

export class StampedProductDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' was stamped'
  }

  getPrice(): number {
    return this.product.getPrice() + 10
  }
}
