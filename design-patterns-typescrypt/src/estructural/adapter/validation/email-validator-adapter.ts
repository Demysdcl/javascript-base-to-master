import isEmail from 'validator/lib/isEmail'
import { EmailValidatorProtocol } from './email-validator-protocol'

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isEmail(email: string): boolean {
    return isEmail(email)
  }
}
