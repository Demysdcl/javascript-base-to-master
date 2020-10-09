import { Customer } from '../customer/customer'
import { VehicleProtocol } from './../vehicle/vehicle-protocol'

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): Customer
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol
}
