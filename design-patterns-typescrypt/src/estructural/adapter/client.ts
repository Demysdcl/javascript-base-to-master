import { EmailValidatorAdapter } from './validation/email-validator-adapter'
import { EmailValidatorProtocol } from './validation/email-validator-protocol'

function validateEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Valid email')
  } else {
    console.log('Invalid email')
  }
}

validateEmail(new EmailValidatorAdapter(), 'demysdcl@gmail.com')
validateEmail(new EmailValidatorAdapter(), 'demysdcl@gmailcom')
