import { DeviceImplementation } from './device-implementation'

export class Radio implements DeviceImplementation {
  private volume = 10
  private power = false
  private name = 'Radio'

  getName(): string {
    return this.name
  }
  getPower(): boolean {
    return this.power
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus
  }
  getVolume(): number {
    return this.volume
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) return
    this.volume = volume
  }
}
