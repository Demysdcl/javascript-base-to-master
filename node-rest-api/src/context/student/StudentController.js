import Student from './Student';

class StudentController {
  async store(req, res) {
    try {
      return res.json(await Student.create(req.body));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async index(req, res) {
    try {
      return res.json(await Student.findAll());
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : 'We had an internal problem',
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['You must inform an ID'],
        });
      }

      return res.json(await Student.findByPk(id));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['You must inform an ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400)
          .json({ errors: ['Student not found'] });
      }

      return res.json(await student.update(req.body));
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['You must inform an ID'],
        });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400)
          .json({ errors: ['Student not found'] });
      }

      await student.destroy();

      return res.json(`The student ${student.firstname} was deleted`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }
}

export default new StudentController();