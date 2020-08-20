const Contact = require("../models/ContactModel");
const { flashAndBack } = require("./flashUtil");
const { async } = require("regenerator-runtime");

const contact = {}

exports.index = (req, res) => res.render("contact", { contact });

exports.register = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.register();

    if (contact.errors.length) {
      flashAndBack(req, res, "errors", contact.errors);
      return
    }

    flashAndBack(req, res, "success", "The contact was created");
  } catch (error) {
      console.error(error)
  }

  return;
};

exports.edit = async(req, res) => {
  if(!req.params.id) return res.render('404')
  contact = await Contact.findById(req.params.id)

  if(!contact) return res.render('404')

  res.render('contact', { contato })
}