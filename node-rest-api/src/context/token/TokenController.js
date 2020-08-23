import jwt from 'jsonwebtoken';
import User from '../user/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    const sendError = (condition, message) => {
      if (condition) {
        return res.status(401).json({
          errors: [message],
        });
      }
      return null;
    };

    sendError(!email || !password, 'Invalid credentials');

    const user = await User.findOne({ where: { email } });

    sendError(!user, 'User not found');

    sendError(!(await user.passwordIsValid(password)), 'Password is incorrect');

    const token = jwt.sign(
      { id: user.id, email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      },
    );

    return res.json({ token });
  }
}

export default new TokenController();
