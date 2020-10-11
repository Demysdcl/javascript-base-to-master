import { RemoteControl } from './remote-control'

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    this.setVolume(10)
  }

  volumeDown(): void {
    this.setVolume(-10)
  }

  setVolume(value: number): void {
    const oldvolume = this.device.getVolume()
    this.device.setVolume(this.device.getVolume() + value)
    console.log(
      `${this.device.getName()} had the volume ${oldvolume} and now has ${this.device.getVolume()}`,
    )
  }
}
