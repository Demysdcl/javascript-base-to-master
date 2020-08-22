import Student from './Student';

class StudentController {
  async post(req, res) {
    const createdStudent = await Student.create({
      firstname: 'Davi',
      lastname: 'Lima',
      email: 'davidll@gmail.com',
      age: 35,
      weight: 72.2,
      height: 66.5,
    });
    res.json(createdStudent);
  }
}

export default new StudentController();
