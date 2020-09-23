import { Discount } from '../discount/discount'
import { CartItem } from '../item-cart/cart-item'

export class ShoppingCart {
  private readonly _items: CartItem[] = []

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  total(): number {
    return this._items.reduce((acu, cur) => acu + cur.price, 0)
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total())
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    console.log('Emptying your shopping cart')
    this._items.length = 0
  }
}
