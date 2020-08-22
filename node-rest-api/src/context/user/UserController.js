import User from './User';

class UserController {
  async store(req, res) {
    try {
      return res.json(await User.create(req.body));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async index(req, res) {
    try {
      return res.json(await User.findAll());
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async show(req, res) {
    try {
      return res.json(await User.findByPk(req.params.id));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400)
          .json({ errors: ['the id must be sent'] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400)
          .json({ errors: ['User not found'] });
      }

      return res.json(await user.update(req.body));
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400)
          .json({ errors: ['the id must be sent'] });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400)
          .json({ errors: ['User not found'] });
      }

      await user.destroy();

      return res.json('User was deleted');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }
}

export default new UserController();
