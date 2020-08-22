import User from './User';

class UserRepository {
  async create(user) {
    try {
      return User.create(user);
    } catch (error) {
      return error.errors.map((err) => err.message);
    }
  }
}

export default new UserRepository();
