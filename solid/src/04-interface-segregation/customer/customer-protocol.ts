export interface CustomerOrderProtocal {
  getName(): string
  getIDN(): string
}

export interface IndividualCustomerProtocol {
  firstname: string
  lastname: string
  cpf: string
}

export interface EnterpriseCustomerProtocol {
  name: string
  cnpj: string
}
