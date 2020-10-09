import { Customer } from '../customer/customer'
import { IndividualCustomer } from '../customer/individual-customer'
import { IndividualCar } from '../vehicle/individual-car'
import { VehicleProtocol } from '../vehicle/vehicle-protocol'
import { CreateVehicleCustomer } from './customer-vehicle-factory'

export class IndividualCreateVehicleCustomerFactory
  implements CreateVehicleCustomer {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName)
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    return new IndividualCar(vehicleName, this.createCustomer(customerName))
  }
}
