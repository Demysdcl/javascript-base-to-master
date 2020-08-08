const Login = require("../models/LoginModel");
const flashUtil = require("./flashUtil");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length) {
      flashUtil.flashAndBack(req, res, "errors", login.errors);
      return;
    }

    flashUtil.flashAndBack(req, res, "success", "The count was created")
    return
  } catch (error) {
    res.render("404");
  }
};

exports.signin = (req, res) => {};
