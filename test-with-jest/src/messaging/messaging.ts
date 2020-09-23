import { MessagingProtocol } from './messaging-protocol'

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Message sent:', msg)
  }
}
