import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Authentication required'],
    });
  }

  try {
    const { id, email } = jwt.verify(authorization.split(' ')[1], process.env.TOKEN_SECRET);
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Invalid or expired token'],
    });
  }
};
