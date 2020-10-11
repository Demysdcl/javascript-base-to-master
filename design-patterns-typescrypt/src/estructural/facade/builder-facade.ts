import { MainDishBuilder } from '../../creational/builder/implementations/main-dish-builder'
export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder()

  makeMeal(): void {
    this.mainDishBuilder.makeMeal().makeBeverage()
    console.log(this.mainDishBuilder.getMeal())
  }
}
