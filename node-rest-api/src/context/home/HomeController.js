class HomeController {
  index(req, res) {
    res.json({
      isAllRight: true,
    });
  }
}

export default new HomeController();
