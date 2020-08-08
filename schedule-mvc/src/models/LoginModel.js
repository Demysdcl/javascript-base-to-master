const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async signin() {
    this.validateBody()
    if (this.errors.length) return;
    this.user = await this.userExists()

    if(!this.user) {
      this.errors.push("User not found!")
      return null
    }

    if(!bcrypt.compareSync(this.body.password, this.user.password)) {
      this.errors.push("Invad password!")
      return null
    }

    return this.user
  }

  async register() {
    await this.validate();

    if (this.errors.length) return;

    this.body.password = bcrypt.hashSync(
      this.body.password,
      bcrypt.genSaltSync()
    );
    return await LoginModel.create(this.body);
  }

  async validate() {
    this.cleanUp();
    this.validateBody()

    if (this.errors.length) return
    if (await this.userExists()) {
      this.errors.push("The e-mail already exists");
    }
  }

  validateBody() {
    if (!validator.isEmail(this.body.email)) {
      this.errors.push("Invalid e-mail");
    }

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("The password must be between 3 and 50 characters");
    }
  }

  async userExists() {
    return await LoginModel.findOne({ email: this.body.email });
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
