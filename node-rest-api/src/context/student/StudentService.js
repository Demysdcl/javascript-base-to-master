import Student from './Student';
import Photo from '../photo/Photo';

class StudentService {
  async create(student) {
    return Student.create(student);
  }

  async findAll() {
    return Student.findAll({
      attributes: ['id', 'firstname', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
  }

  async findByPk(id) {
    this.verifyId(id);

    return Student.findByPk(id, {
      attributes: ['id', 'firstname', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
  }

  async update(id, student) {
    this.verifyId(id);

    const foundStudent = await Student.findByPk(id);

    if (!foundStudent) {
      throw new Error('Student not found');
    }

    return foundStudent.update(student);
  }

  async destroy(id) {
    this.verifyId(id);

    const foundStudent = await Student.findByPk(id);

    if (!foundStudent) {
      throw new Error('Student not found');
    }

    return foundStudent.destroy();
  }

  verifyId(id) {
    if (!id) {
      throw new Error('You must inform an ID');
    }
  }
}

export default new StudentService();
