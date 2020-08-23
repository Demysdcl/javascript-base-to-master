class HomeController {
  store(req, res) {
    res.json('The photo is stored');
  }
}

export default new HomeController();
