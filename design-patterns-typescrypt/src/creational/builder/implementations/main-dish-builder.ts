import { MealBuilderProtocol } from '../interfaces/meal-bulder-protocol';
import { MealBox } from './meal-box';
import { Bean, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox()

    reset(): this {
        this._meal = new MealBox()
        return this
    }

    makeMeal(): this {
        this._meal.add(
            new Rice('Tio João', 5),
            new Bean('Preto', 10),
            new Meat('Picanha', 10)
        )
        return this
    }
    makeBeverage(): this {
        this._meal.add(new Beverage('Orange Juice', 5))
        return this
    }
    makeDessert(): this {
        this._meal.add(new Dessert('Pudim', 7))
        return this
    }

    getMeal(): MealBox {
        return this._meal
    }

    getPrice(): number {
        return this._meal.getPrice()
    }

}
