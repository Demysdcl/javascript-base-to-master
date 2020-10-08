import { MealCompositeProtocol } from './../interfaces/meal-composite-protocol';
export class MealBox implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol [] = []
    
    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0)
    }

    add(...meals: MealCompositeProtocol []): void {
        meals.forEach(meals => this._children.push(meals))
    }
    
}