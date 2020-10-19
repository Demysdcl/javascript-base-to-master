export class SmartHouseLight {
  private isOn = false
  private intensity = 50

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF'
  }

  on(): boolean {
    return this.setIsOn(true)
  }

  off(): boolean {
    return this.setIsOn(false)
  }

  setIsOn(value: boolean): boolean {
    this.isOn = value
    console.log(`${this.name} is now ${this.getPowerStatus()}`)
    return this.isOn
  }

  increaseIntensity(): number {
    if (this.intensity > 100) return this.intensity
    this.intensity += 1
    return this.intensity
  }

  decreaseIntensity(): number {
    if (this.intensity < 0) return this.intensity
    this.intensity -= 1
    return this.intensity
  }
}
