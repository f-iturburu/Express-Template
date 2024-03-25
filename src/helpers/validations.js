const { body, param } = require('express-validator');
const { getByEmailService } = require('../services/users.services');

const emailExistValidation = async (email) => {
  const emailExist = await getByEmailService(email);

  if (emailExist) {
    throw new Error(`El email ${email}, ya se encuentra en uso`);
  }
  return false;
};

const createUsersValidations = {
  name: body('name')
  .not()
  .isEmpty()
  .withMessage('El campo Nombre/s es requerido')
  .matches(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)
  .withMessage('Ingrese nombres válidos')
,
lastName: body('lastName')
  .not()
  .isEmpty()
  .withMessage('El campo Apellido/s es requerido')
  .matches(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)
  .withMessage('Ingrese un apellido válido'),
  
  email: body('email')
    .isEmail()
    .withMessage('El email no es válido')
    .not()
    .isEmpty()
    .withMessage('Este campo es requerido')
    .custom(emailExistValidation),

  password: body('password')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage('La contraseña no cumple con los requisitos'),
};

const deleteUserValidation = {
  id: param('id').isMongoId().withMessage('El id no es un ObjectId'),
};

module.exports = {
  createUsersValidations,
  deleteUserValidation,
};
