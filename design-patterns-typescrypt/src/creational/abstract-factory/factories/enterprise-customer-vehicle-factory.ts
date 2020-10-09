import { Customer } from '../customer/customer'
import { VehicleProtocol } from '../vehicle/vehicle-protocol'
import { EnterpriseCustomer } from './../customer/enterprise-customer'
import { EnterpriseCar } from './../vehicle/enterprise-car'
import { CreateVehicleCustomer } from './customer-vehicle-factory'

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomer {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName)
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    return new EnterpriseCar(vehicleName, this.createCustomer(customerName))
  }
}
