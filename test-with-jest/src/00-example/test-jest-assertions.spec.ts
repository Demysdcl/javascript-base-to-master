describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10

    expect(number).toBe(10)

    expect(number).toEqual(10)

    expect(number).not.toBeNull()
    expect(number).not.toBeFalsy()
    expect(number).toBeTruthy()

    expect(number).toBeGreaterThan(9)
    expect(number).toBeGreaterThanOrEqual(10)
    expect(number).toBeLessThan(11)
    expect(number).toBeLessThanOrEqual(10)

    expect(number).toBeCloseTo(10.0001)
    expect(number).toBeCloseTo(9.996)

    expect(number).toHaveProperty('toString')
  })
})

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Demys', age: 35 }
    const anotherPerson = { ...person }

    expect(person).toEqual(anotherPerson)
    expect(person).toHaveProperty('age')
    expect(person).toHaveProperty('age', 35)
    expect(person).not.toHaveProperty('nickname')
  })
})
