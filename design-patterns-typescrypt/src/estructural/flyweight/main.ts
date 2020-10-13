import { deliveryContext } from './delivery/delivery-context'
import { DeliveryFactory } from './delivery/delivery-factory'

const factory = new DeliveryFactory()

deliveryContext(factory, 'Demys', '1787', 'Alagoas', 'Curitiba')
deliveryContext(factory, 'Laíza', '1787', 'Alagoas', 'Curitiba')
deliveryContext(factory, 'Davi', '1787', 'Alagoas', 'Curitiba')
deliveryContext(factory, 'Lourdes', '103', 'Itauna', 'Novo Aleixo')
deliveryContext(factory, 'Diego', '103', 'Itauna', 'Novo Aleixo')
console.log(factory.getLocations())
