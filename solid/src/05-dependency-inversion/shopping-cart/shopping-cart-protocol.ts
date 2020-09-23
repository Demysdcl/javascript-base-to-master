import { CartItem } from '../item-cart/cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>
  addItem(item: CartItem): void
  removeItem(index: number): void
  total(): number
  totalWithDiscount(): number
  isEmpty(): boolean
  clear(): void
}
