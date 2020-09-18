type CartItem = { name: string; price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  total(): string {
    return this._items.reduce((acu, cur) => acu + cur.price, 0).toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty')
      return
    }

    this._orderStatus = 'closed'
    this.sendMessage('Your order was received')
    this.saveOrder()
    this.clear()
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(msg: string): void {
    console.log('Message sent:', msg)
  }

  saveOrder(): void {
    console.log('Order saved successfully')
  }

  clear(): void {
    console.log('Emptying your shopping cart')
    this._items.length = 0
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus
  }
}

const shoppingCart = new ShoppingCartLegacy()
shoppingCart.addItem({ name: 'T-shirt', price: 49.9 })
shoppingCart.addItem({ name: 'notebook', price: 9.9 })
shoppingCart.addItem({ name: 'pencil', price: 1.59 })

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log()

shoppingCart.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
