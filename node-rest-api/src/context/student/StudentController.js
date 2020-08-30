import studentService from './StudentService';
import extractErrorMessage from '../../utilities/extractedErrorMessage';
import errorResponse from '../../utilities/errorResponse';

class StudentController {
  async store(req, res) {
    try {
      return res.json(await studentService.create(req.body));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async index(_, res) {
    try {
      return res.json(await studentService.findAll());
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async show(req, res) {
    try {
      return res.json(await studentService.findByPk(req.params.id));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async update(req, res) {
    try {
      return res.json(await studentService.update(req.params.id, req.body));
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async delete(req, res) {
    try {
      await studentService.destroy(req.params.id);
      return res.json(`The student ${req.params.id} was deleted`);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

export default new StudentController();
