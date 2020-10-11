import { Radio } from './device/radio'
import { Tv } from './device/tv'
import { RemoteControl } from './remote-control/remote-control'
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume'

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower()

  if (!('volumeUp' in abstraction)) return

  abstraction.volumeUp()
  abstraction.volumeUp()
  abstraction.volumeDown()
}
console.log('########### Radio ##############', '\n')
const radio = new Radio()
const radioRemoteControl = new RemoteControl(radio)
clientCode(radioRemoteControl)

console.log('########### TV ##############', '\n')
const tv = new Tv()
const tvRemoteControl = new RemoteControlWithVolume(tv)
clientCode(tvRemoteControl)
