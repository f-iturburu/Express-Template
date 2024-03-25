const { getByEmailService } = require('../services/users.services');
const { passwordMatch } = require('../helpers/passwordHashing');
const jwt = require('jsonwebtoken');
const { jwtParams } = require('../config/config');
const catchAsync = require('../utils/catchAsync');

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const userExist = await getByEmailService(email);
  if (!userExist) return res.status(404).json('El usuario no se encuentra registrado.');

  const passMatch = await passwordMatch(password, userExist.password);
  if (!passMatch) return res.status(404).json('El email o la contraseña son in correctos.');

  const payload = {
    name: userExist.name,
    lastName: userExist.lastName,
    _id: userExist._id,
    email: userExist.email,
    role: userExist.role,
  };
  const token = jwt.sign(payload, jwtParams.secret, {
    expiresIn: jwtParams.exporesIn || 120,
  });

  res.status(200).json({ msg: 'Login successfully', token });
});

module.exports = {
  login,
};
