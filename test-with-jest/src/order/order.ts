import { CustomerOrderProtocol } from '../customer/customer-protocol'
import { MessagingProtocol } from './../messaging/messaging-protocol'
import { ShoppingCartProtocol } from './../shopping-cart/shopping-cart-protocol'
import { PersistencyProtocol } from './order-persistency-protocol'
import { OrderStatus } from './order-status'

export class Order {
  private _orderStatus: OrderStatus = 'open'

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
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
