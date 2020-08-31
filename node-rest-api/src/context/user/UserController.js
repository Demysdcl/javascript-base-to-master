import errorResponse from '../../utilities/errorResponse';
import userService from './UserService';

class UserController {
  async store(req, res) {
    try {
      return res.json(await userService.create(req.body));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async index(req, res) {
    try {
      return res.json(await userService.findAll());
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async show(req, res) {
    try {
      return res.json(await userService.findByPk(req.userId));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async update(req, res) {
    try {
      return res.json(await userService.update(req.userId, req.body));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async delete(req, res) {
    try {
      return res.json(await userService.delete(req.userId));
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

export default new UserController();
