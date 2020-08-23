import multer from 'multer';
import multerConfig from '../../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class HomeController {
  store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      return res.json({
        status: 'OK',
        file: req.file,
      });
    });
  }
}

export default new HomeController();
