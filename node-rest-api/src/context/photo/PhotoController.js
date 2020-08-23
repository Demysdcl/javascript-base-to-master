class HomeController {
  store(req, res) {
    res.json({
      status: 'saved',
      file: req.file,
    });
  }
}

export default new HomeController();
