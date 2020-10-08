import { MainDishBuilder } from './implementations/main-dish-builder';
import { MealBox } from './implementations/meal-box';
import { Bean, Meat, Rice } from './implementations/meals';

// No builder
console.log('###################### No builder ######################');

const mealBox = new MealBox()

mealBox.add(
    new Rice('Tio João', 5),
    new Bean('Preto', 10),
    new Meat('Picanha', 10)
)

console.log(mealBox)
console.log(mealBox.getPrice())

// With builder

console.log('###################### With builder ######################');
const mainDishBuilder = new MainDishBuilder()

mainDishBuilder.makeMeal().makeBeverage()

console.log(mainDishBuilder.getMeal())
