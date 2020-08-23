import User from './User';

class UserController {
  async store(req, res) {
    try {
      const { id, name, email } = await User.create(req.body);
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async index(req, res) {
    try {
      return res.json(await User.findAll({ attributes: ['id', 'name', 'email'] }));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async show(req, res) {
    try {
      const { id, name, email } = await User.findByPk(req.userId);
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400)
          .json({ errors: ['User not found'] });
      }
      const { id, name, email } = await user.update(req.body);
      return res.json({ id, name, email });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
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
