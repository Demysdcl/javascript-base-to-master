export interface DeviceImplementation {
  getName(): string
  getPower(): boolean
  setPower(powerStatus: boolean): void
  getVolume(): number
  setVolume(volume: number): void
}
