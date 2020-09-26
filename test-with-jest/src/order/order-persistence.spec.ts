import { Persistency } from './order-persistency'

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks())

  const sut = new Persistency()
  const consoleSpy = jest.spyOn(console, 'log')

  it('should return undefined', () => {
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('should call console.log once', () => {
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once', () => {
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once with "Order saved successfully"', () => {
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('Order saved successfully')
  })
})
