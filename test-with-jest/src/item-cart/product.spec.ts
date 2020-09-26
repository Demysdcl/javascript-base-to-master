import { Product } from './product'

describe('Messing', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have properties name and price', () => {
    const sut = new Product('Rice', 10.55)
    expect(sut).toHaveProperty('name', 'Rice')
    expect(sut.price).toBeCloseTo(10.55)
  })
})
