import { CustomerOrderProtocal } from '../customer/customer-protocol'
import { Messaging } from '../messaging/messaging'
import { ShoppingCart } from '../shopping-cart/shopping-card'
import { Persistency } from './../../01-single-responsibility/order/order-persistency'
import { OrderStatus } from './../../01-single-responsibility/order/order-status'

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
    this.messaging.sendMessage(
      'Your order was received, the total was ' +
        this.shoppingCart.totalWithDiscount(),
    )
    console.log(
      `Order ended to ${this.customer.getName()}, with identification number ${this.customer.getIDN()} `,
    )
    this.persistency.saveOrder()
    this.shoppingCart.clear()
  }
}
