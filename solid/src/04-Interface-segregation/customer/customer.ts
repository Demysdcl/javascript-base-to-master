import {
  CustomerOrderProtocal,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol
} from './customer-protocol'

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrderProtocal {
  firstname: string
  lastname: string
  cpf: string

  constructor(firstname: string, lastname: string, cpf: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.cpf = cpf
  }

  getName(): string {
    return this.firstname + ' ' + this.lastname
  }
  getIDN(): string {
    return this.cpf
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrderProtocal {
  name: string
  cnpj: string

  constructor(name: string, cnpj: string) {
    this.name = name
    this.cnpj = cnpj
  }

  getName(): string {
    return this.name
  }
  getIDN(): string {
    return this.cnpj
  }
}
