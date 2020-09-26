import { EnterpriseCustomer, IndividualCustomer } from './customer'

const createIndividualCustomer = (
  firstName: string,
  lastname: string,
  cpf: string,
) => {
  return new IndividualCustomer(firstName, lastname, cpf)
}

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe('IndividualCustomer', () => {
  it('should have properties firstname, lastname and cpf', () => {
    const sut = createIndividualCustomer('Demys', 'Lima', '12345678910')
    expect(sut).toHaveProperty('firstname', 'Demys')
    expect(sut).toHaveProperty('lastname', 'Lima')
    expect(sut).toHaveProperty('cpf', '12345678910')
  })

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Demys', 'Lima', '12345678910')
    expect(sut.getName()).toBe('Demys Lima')
    expect(sut.getIDN()).toBe('12345678910')
  })
})

describe('EnterpriseCustomer', () => {
  it('should have properties name and cnpj', () => {
    const sut = createEnterpriseCustomer('DCLFactor', '12345678910')
    expect(sut).toHaveProperty('name', 'DCLFactor')
    expect(sut).toHaveProperty('cnpj', '12345678910')
  })

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('DCLFactor', '12345678910')
    expect(sut.getName()).toBe('DCLFactor')
    expect(sut.getIDN()).toBe('12345678910')
  })
})
