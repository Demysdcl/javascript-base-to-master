import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount
} from './discount/discount'
import { Product } from './item-cart/product'
import { Messaging } from './messaging/messaging'
import { Order } from './order/order'
import { Persistency } from './order/order-persistency'
import { ShoppingCart } from './shopping-cart/shopping-card'

const shoppingCart = new ShoppingCart(new NoDiscount())
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)
shoppingCart.addItem(new Product('T-shirt', 49.9))
shoppingCart.addItem(new Product('notebook', 9.9))
shoppingCart.addItem(new Product('pencil', 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.totalWithDiscount().toFixed(2))
console.log(shoppingCart.total().toFixed(2))
order.checkout()
console.log(shoppingCart.items)
console.log(shoppingCart.total().toFixed(2))

console.log(
  '#####################################################################################',
)

const shoppingCart2 = new ShoppingCart(new TenPercentDiscount())
const order2 = new Order(shoppingCart2, messaging, persistency)
shoppingCart2.addItem(new Product('T-shirt', 49.9))
shoppingCart2.addItem(new Product('notebook', 9.9))
shoppingCart2.addItem(new Product('pencil', 1.59))

console.log(shoppingCart2.items)
console.log(shoppingCart2.totalWithDiscount().toFixed(2))
console.log(shoppingCart2.total().toFixed(2))
order2.checkout()
console.log(shoppingCart2.items)
console.log(shoppingCart2.totalWithDiscount().toFixed(2))

console.log(
  '#####################################################################################',
)

const shoppingCart3 = new ShoppingCart(new FiftyPercentDiscount())
const order3 = new Order(shoppingCart3, messaging, persistency)
shoppingCart3.addItem(new Product('T-shirt', 49.9))
shoppingCart3.addItem(new Product('notebook', 9.9))
shoppingCart3.addItem(new Product('pencil', 1.59))

console.log(shoppingCart3.items)
console.log(shoppingCart3.totalWithDiscount().toFixed(2))
console.log(shoppingCart3.total().toFixed(2))
order3.checkout()
console.log(shoppingCart3.items)
console.log(shoppingCart3.totalWithDiscount().toFixed(2))
