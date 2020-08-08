const Login = require("../models/LoginModel");
const flashUtil = require("./flashUtil");

exports.index = (req, res) => {
  if(req.session.user) return res.render('/')
  res.render("login");
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length) {
      flashUtil.flashAndBack(req, res, "errors", login.errors);
      return
    }

    flashUtil.flashAndBack(req, res, "success", "The count was created")
    return

  } catch (error) {
    res.render("404");
  }
};

exports.signin = async (req, res) => {
  try {
    const login = new Login(req.body);
    const user = await login.signin();

    if (login.errors.length) {
      flashUtil.flashAndBack(req, res, "errors", login.errors);
      return;
    }

    req.session.user = user
    flashUtil.flashAndBack(req, res, "success", "You are logged");
    res.redirect('/')
  
    return
  } catch (error) {
    res.render("404");
  }
};

exports.logout = (req, res) => {
  req.session.destroy()
  res.redirect('/login')
}
