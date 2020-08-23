import validator from "validator";

export default class LoginValidator {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    for (let spanError of el.querySelectorAll(".text-danger")) {
      spanError.remove();
    }

    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      emailInput.after(this.createSpan("Invalid e-mail."));
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      passwordInput.after(
        this.createSpan("The password must be between 3 and 50 characters.")
      );
      error = true;
    }

    if (!error) el.submit();
  }

  createSpan(text) {
    const span = document.createElement("span");
    span.classList.add("text-danger");
    span.innerHTML = text;
    return span;
  }
}
