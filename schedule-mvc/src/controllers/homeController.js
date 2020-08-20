const Contact = require('../models/ContactModel')

exports.index = async (req, res) => {
  const contact = new Contact()
  const list = await contact.list()
  res.render('index', {list});
  return;
};