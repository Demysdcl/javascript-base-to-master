import { Customer } from './customer-protocol'
export class IndividualCustomer implements Customer {
  firstname: string
  lastname: string
  cpf: string
  cnpj: string

  constructor(firstname: string, lastname: string, cpf: string, cnpj: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.cnpj = cnpj
    this.cpf = cpf
  }
}

export class EnterpriseCustomer implements Customer {
  firstname: string
  lastname: string
  cpf: string
  cnpj: string

  constructor(firstname: string, lastname: string, cpf: string, cnpj: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.cnpj = cnpj
    this.cpf = cpf
  }
}
