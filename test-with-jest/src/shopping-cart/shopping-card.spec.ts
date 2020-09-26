import { DiscountProtocol } from '../discount/discount'
import { CartItem } from './../item-cart/cart-item'
import { ShoppingCart } from './shopping-card'

const createSut = () => {
  return new ShoppingCart(discountMock())
}

const createSutWith2Items = (): ShoppingCart => {
  const sut = new ShoppingCart(discountMock())
  sut.addItem(createCartItem('T-shirt', 10))
  sut.addItem(createCartItem('pen', 1))
  return sut
}

const discountMock = () => {
  class DiscountMock extends DiscountProtocol {}
  return new DiscountMock(0)
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price)
}

describe('', () => {
  afterEach(() => jest.clearAllMocks())

  it('should cart to be empty ', () => {
    const sut = createSut()
    expect(sut.isEmpty()).toBeTruthy()
  })

  it('should cart has 2 items ', () => {
    const sut = createSutWith2Items()
    expect(sut.items.length).toBe(2)
  })

  it('should price has no discount ', () => {
    const sut = createSutWith2Items()
    expect(sut.totalWithDiscount()).toBe(11)
  })

  it('should cart has 2 items and after has 0 items ', () => {
    const sut = createSutWith2Items()
    expect(sut.isEmpty()).toBeFalsy()
    expect(sut.items.length).toBe(2)
    sut.clear()
    expect(sut.isEmpty()).toBeTruthy()
    expect(sut.items.length).toBe(0)
  })

  it('should remove product', () => {
    const sut = createSutWith2Items()
    expect(sut.isEmpty()).toBeFalsy()
    expect(sut.items.length).toBe(2)
    sut.removeItem(1)
    expect(sut.isEmpty()).toBeFalsy()
    expect(sut.items.length).toBe(1)
  })
})
