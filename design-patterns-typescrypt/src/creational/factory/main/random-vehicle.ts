import { BicycleFactory } from '../factories/bicycle-factory'
import { CarFactory } from '../factories/car-factory'
import { Vehicle } from '../vehicle/vehicle'

const randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory()
  const bicycleFactory = new BicycleFactory()

  const car1 = carFactory.getVehicle('Fuscão Preto')
  const car2 = carFactory.getVehicle('Land hover')
  const bicycle = bicycleFactory.getVehicle('Bicycle')

  const vehicles = [car1, car2, bicycle]

  return vehicles[randomNumber(vehicles.length)]
}
