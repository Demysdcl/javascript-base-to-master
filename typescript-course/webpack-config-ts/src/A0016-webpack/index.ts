import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (event: Event) => {
  event.preventDefault()
  hideErrorMessage(form)
  checkForEmptyFields(username, email, password, password2)
  checkEmail()
  checkPasswords()
})

function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    const label = input.previousElementSibling as HTMLLabelElement
    if (!input.value) {
      showErrorMessage(input, `${label.innerText} is required`)
    }
  })
}

function checkEmail() {
  if (!isEmail(email.value)) {
    showErrorMessage(email, 'The e-mail is invalid')
  }
}

function checkPasswords() {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'The passwords not match')
    showErrorMessage(password2, 'The passwords not match')
  }
}

function hideErrorMessage(form: HTMLFormElement) {
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

showErrorMessage(username, 'Whats the matter')
hideErrorMessage(form)
