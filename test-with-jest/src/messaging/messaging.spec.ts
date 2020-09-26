import { Messaging } from './messaging'

describe('Messing', () => {
  afterEach(() => jest.clearAllMocks())

  const sut = new Messaging()
  const consoleSpy = jest.spyOn(console, 'log')

  it('should return undefined', () => {
    expect(sut.sendMessage('Test')).toBeUndefined()
  })

  it('should call console.log once', () => {
    sut.sendMessage('Test')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once', () => {
    sut.sendMessage('Test')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once with "Message sent: msg"', () => {
    sut.sendMessage('Test')
    expect(consoleSpy).toHaveBeenCalledWith('Message sent:', 'Test')
  })
})
