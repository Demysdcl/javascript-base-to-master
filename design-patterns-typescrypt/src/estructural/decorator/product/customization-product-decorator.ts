import { ProductDecorator } from './product-decorator'

export class CustomizationProductDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' was customized'
  }

  getPrice(): number {
    return this.product.getPrice() + 50
  }
}
