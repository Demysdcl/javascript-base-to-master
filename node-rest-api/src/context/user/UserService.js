import User from './User';

class UserService {
  async create(user) {
    const { id, name, email } = await User.create(user);
    return { id, name, email };
  }

  async findAll() {
    return User.findAll({ attributes: ['id', 'name', 'email'] });
  }

  async findByPk(userId) {
    const { id, name, email } = await User.findByPk(userId);
    return { id, name, email };
  }

  async update(userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const { id, name, email } = await user.update(user);
    return { id, name, email };
  }

  async delete(userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return `User ${user.name} was deleted`;
  }
}

export default new UserService();
