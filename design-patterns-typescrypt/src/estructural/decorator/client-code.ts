import { CustomizationProductDecorator } from './product/customization-product-decorator'
import { StampedProductDecorator } from './product/stamped-product-decorator'
import { TShirt } from './product/t-shirt'

const tShirt = new TShirt()
const stampedTShirt = new StampedProductDecorator(tShirt)
const stampedTwice = new StampedProductDecorator(stampedTShirt)
const customizedTShit = new CustomizationProductDecorator(tShirt)

console.log(tShirt.getName(), tShirt.getPrice())
console.log(stampedTShirt.getName(), stampedTShirt.getPrice())
console.log(stampedTwice.getName(), stampedTwice.getPrice())
console.log(customizedTShit.getName(), customizedTShit.getPrice())
