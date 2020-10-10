export interface ValidationComponent {
  validate(value: unknown): boolean
}

export class ValidateEmail implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string' && /@/.test(value)
  }
}

export class ValidateString implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string'
  }
}

export class ValidateNumber implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string' && /\d+/.test(value)
  }
}

export class ValidationComposite implements ValidationComponent {
  private children: ValidationComponent[] = []

  add(...validates: ValidationComponent[]): void {
    validates.forEach((validate) => this.children.push(validate))
  }

  validate(value: unknown): boolean {
    for (const child of this.children) {
      if (!child.validate(value)) return false
    }
    return true
  }
}

const validateEmail = new ValidateEmail()
const validateString = new ValidateString()
const validateNumber = new ValidateNumber()

const validateComposite = new ValidationComposite()

validateComposite.add(validateString, validateEmail, validateNumber)

console.log(validateComposite.validate('1@'))
