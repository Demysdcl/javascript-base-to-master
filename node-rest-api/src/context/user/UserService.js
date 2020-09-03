import User from './User';

class UserService {
  async create(user) {
    const foundUserByEmail = await User.findOne({ where: { email: user.email } });

    if (foundUserByEmail) {
      throw new Error('E-mail already exists!');
    }

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

  async update(userId, user) {
    const foundUser = await User.findByPk(userId);
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundUserByEmail = await User.findOne({ where: { email: user.email } });

    if (foundUserByEmail && foundUserByEmail.id !== userId) {
      throw new Error('The new e-mail is already associated to other user');
    }

    const { id, name, email } = await foundUser.update(user);

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
