export class Car {
  private readonly engine = new Engine()

  start(): void {
    this.engine.start()
  }

  speedUp(): void {
    this.engine.speedUp()
  }

  stop(): void {
    this.engine.stop()
  }

  turnOff(): void {
    this.engine.turnOff()
  }
}

export class Engine {
  start(): void {
    console.log('The engine is starting')
  }

  speedUp(): void {
    console.log('The engine is speeding up')
  }

  stop(): void {
    console.log('The engine is stopping')
  }

  turnOff(): void {
    console.log('The engine is turning off')
  }
}

const car = new Car()

car.start()
car.speedUp()
car.stop()
car.turnOff()
