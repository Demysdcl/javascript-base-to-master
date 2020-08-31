class HomeController {
  index(req, res) {
    res.json({
      welcome: 'Welcome to the APP',
    });
  }
}

export default new HomeController();
