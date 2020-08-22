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
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }

  async show(req, res) {
    try {
      return res.json(await Student.findByPk(req.params.id));
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

      const student = await Student.findByPk(req.params.id);

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
      if (!req.params.id) {
        return res.status(400)
          .json({ errors: ['the id must be sent'] });
      }

      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400)
          .json({ errors: ['Student not found'] });
      }

      await student.destroy();

      return res.json('Student was deleted');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : 'We had an internal problem',
      });
    }
  }
}

export default new StudentController();
