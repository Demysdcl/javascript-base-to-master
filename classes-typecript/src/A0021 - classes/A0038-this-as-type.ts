export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n
    return this
  }

  sub(n: number): this {
    this.number -= n
    return this
  }

  mul(n: number): this {
    this.number *= n
    return this
  }

  div(n: number): this {
    this.number /= n
    return this
  }
}

export class PowerCalculator extends Calculator {
  constructor(public number: number) {
    super(number)
  }

  pow(n: number): this {
    this.number **= n
    return this
  }
}

const calculator = new Calculator(10)
calculator.add(5).mul(2).div(2).sub(5)
console.log(calculator)

const powerCalculator = new PowerCalculator(10)
powerCalculator.add(5).mul(2).div(2).sub(5).pow(2)
console.log(powerCalculator)
