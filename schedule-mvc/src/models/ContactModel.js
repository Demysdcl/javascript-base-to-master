const mongoose = require("mongoose");
const validator = require("validator");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now() },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
  }

  async list() {
    return await ContactModel.find({});
  }

  async findById(id) {
    if (typeof id !== "string") return;
    return ContactModel.findById(id);
  }

  async register() {
    await this.validate();

    if (this.errors.length) return;

    return await ContactModel.create(this.body);
  }

  async update(id) {
    this.cleanUp();
    this.validateBody();

    if (this.errors.length) return;

    return await ContactModel.findOneAndUpdate(id, this.body);
  }

  async delete(id) {
    if (typeof id !== "string") return;
    return await ContactModel.findOneAndDelete({_id: id});
  }

  async validate() {
    this.cleanUp();
    this.validateBody();

    if (this.errors.length) return;

    if (await this.userExists()) {
      this.errors.push("The e-mail already exists");
    }
  }

  validateBody() {
    if (!this.body.name) {
      this.errors.push("The name is required");
    }

    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push("Invalid e-mail");
    }

    if (!this.body.email && !this.body.phone) {
      this.errors.push("Input an e-mail or a phone number");
    }
  }

  async userExists() {
    return await ContactModel.findOne({ email: this.body.email });
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      name: this.body.name,
      lastname: this.body.lastname,
      email: this.body.email,
      phone: this.body.phone,
    };
  }
}

module.exports = Contact;
