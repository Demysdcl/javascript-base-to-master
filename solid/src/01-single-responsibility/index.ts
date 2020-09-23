import { Product } from './item-cart/product'
import { Messaging } from './messaging/messaging'
import { Order } from './order/order'
import { Persistency } from './order/order-persistency'
import { ShoppingCart } from './shopping-cart/shopping-card'

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)
shoppingCart.addItem(new Product('T-shirt', 49.9))
shoppingCart.addItem(new Product('notebook', 9.9))
shoppingCart.addItem(new Product('pencil', 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log()

order.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
