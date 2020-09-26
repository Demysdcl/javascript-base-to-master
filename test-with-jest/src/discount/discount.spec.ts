import {
  DiscountProtocol,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount
} from './discount'

const createSut = (className: new () => DiscountProtocol): DiscountProtocol => {
  return new className()
}

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have no Discount', () => {
    const sut = createSut(NoDiscount)
    expect(sut.calculate(10.99)).toBeCloseTo(10.99)
  })

  it('should have 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount)
    expect(sut.calculate(10.99)).toBeCloseTo(9.89)
  })

  it('should have 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount)
    expect(sut.calculate(10.99)).toBeCloseTo(5.495)
  })
})
