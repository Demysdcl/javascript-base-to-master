export abstract class DiscountProtocol {
  constructor(private readonly discount: number) {}

  calculate(price: number): number {
    return price * ((100 - this.discount) / 100)
  }
}

export class FiftyPercentDiscount extends DiscountProtocol {
  constructor() {
    super(50)
  }
}

export class TenPercentDiscount extends DiscountProtocol {
  constructor() {
    super(10)
  }
}

//Broken Liskov substitution
export class NoDiscount extends DiscountProtocol {
  constructor() {
    super(0)
  }
}
