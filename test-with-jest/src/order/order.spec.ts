/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartItem } from '../item-cart/cart-item'
import { CustomerOrderProtocol } from './../customer/customer-protocol'
import { MessagingProtocol } from './../messaging/messaging-protocol'
import { ShoppingCartProtocol } from './../shopping-cart/shopping-cart-protocol'
import { Order } from './order'
import { PersistencyProtocol } from './order-persistency-protocol'

class ShoppingCartMock implements ShoppingCartProtocol {
  items: readonly CartItem[] = []

  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1
  }
  totalWithDiscount(): number {
    return 2
  }
  isEmpty(): boolean {
    return false
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerOrderMock implements CustomerOrderProtocol {
  getName(): string {
    return ''
  }
  getIDN(): string {
    return ''
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock()
  const messagingMock = new MessagingMock()
  const persistencyMock = new PersistencyMock()
  const customerOrderMock = new CustomerOrderMock()

  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerOrderMock,
  )

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerOrderMock,
  }
}

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut()
    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(true)

    sut.checkout()
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1)
    expect(sut.orderStatus).toBe('open')
  })

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut()
    const shoppingCartSpy = jest.spyOn(shoppingCartMock, 'isEmpty')

    sut.checkout()
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1)
    expect(sut.orderStatus).toBe('closed')
  })

  it('should send an e-mail to customer', () => {
    const { sut, messagingMock } = createSut()
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage')
    sut.checkout()
    expect(messagingMockSpy).toHaveBeenCalledTimes(1)
  })

  it('should save the customer purchase', () => {
    const { sut, persistencyMock } = createSut()
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder')
    sut.checkout()
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
  })
})
