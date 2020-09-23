import { Messaging } from '../messaging/messaging'
import { ShoppingCart } from '../shopping-cart/shopping-card'
import { CustomerOrderProtocal } from './../customer/customer-protocol'
import { Persistency } from './order-persistency'
import { OrderStatus } from './order-status'

export class Order {
  private _orderStatus: OrderStatus = 'open'

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrderProtocal,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Your cart is empty')
      return
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage('Your order was received')
    this.persistency.saveOrder()
    this.shoppingCart.clear()
  }
}
