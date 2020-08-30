import multer from 'multer';
import multerConfig from '../../config/multerConfig';
import Photo from './Photo';

const upload = multer(multerConfig).single('photo');

class HomeController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { studentId } = req.body;
        return res.json(await Photo.create({ originalname, filename, studentId }));
      } catch (error) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }
    });
  }
}

export default new HomeController();
