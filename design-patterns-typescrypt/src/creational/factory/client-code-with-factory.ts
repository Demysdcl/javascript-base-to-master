import { CarFactory } from './factories/car-factory'
import { randomCarAlgorithm } from './main/random-vehicle'

const fuscaoPreto = new CarFactory().getVehicle('Fusca preto')
fuscaoPreto.pickUp('John')
fuscaoPreto.stop()

const customerNames = [
  'Han Solo',
  'Leia',
  'Luke',
  'Kylo Ren',
  'Darth Vader',
  'Lord Sith',
  'Jabba',
  'Jar jar Binks',
]

customerNames.forEach((name) => {
  const vehicle = randomCarAlgorithm()
  vehicle.pickUp(name)
  vehicle.stop()
  console.log('---')
})
