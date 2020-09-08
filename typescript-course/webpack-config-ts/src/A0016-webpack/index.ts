import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (event: Event) => {
  event.preventDefault()
  hideErrorMessage()
  if (shouldSendForm()) alert('The form was sent')
})

function shouldSendForm() {
  const hasNoEmptyFields = checkForEmptyFields(username, email, password, password2)
  const isValidEmail = checkEmail()
  const passwodsMatch = checkPasswords()
  return hasNoEmptyFields && isValidEmail && passwodsMatch
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): boolean {
  let hasError = false
  inputs.forEach((input) => {
    const label = input.previousElementSibling as HTMLLabelElement
    if (!input.value) {
      showErrorMessage(input, `${label.innerText} is required`)
      hasError = true
    }
  })
  return !hasError
}

function checkEmail() {
  let hasError = false
  if (!isEmail(email.value)) {
    showErrorMessage(email, 'The e-mail is invalid')
    hasError = true
  }
  return !hasError
}

function checkPasswords() {
  let hasError = false
  if (password.value !== password2.value) {
    showErrorMessage(password, 'The passwords not match')
    showErrorMessage(password2, 'The passwords not match')
    hasError = true
  }
  return !hasError
}

function hideErrorMessage() {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function showErrorMessage(input: HTMLInputElement, msg: string) {
  const formFields = input.parentElement as HTMLDivElement
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement
  errorMessage.innerText = msg
  formFields.classList.add(SHOW_ERROR_MESSAGES)
}
