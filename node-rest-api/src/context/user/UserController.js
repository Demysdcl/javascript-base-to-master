import User from './User';

class UserController {
  async post(req, res) {
    try {
      res.json(await User.create(req.body));
    } catch (error) {
      res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }
}

export default new UserController();
