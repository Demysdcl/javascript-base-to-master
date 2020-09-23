export abstract class Discount {
  constructor(private readonly discount: number) {}

  calculate(price: number): number {
    return price * ((100 - this.discount) / 100)
  }
}

export class FiftyPercentDiscount extends Discount {
  constructor() {
    super(50)
  }
}

export class TenPercentDiscount extends Discount {
  constructor() {
    super(10)
  }
}

//Broken Liskov substitution
export class NoDiscount extends Discount {
  constructor() {
    super(0)
  }
}
