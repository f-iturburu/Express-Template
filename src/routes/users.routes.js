const { Router } = require('express');
const route = Router();
const { getAllUsers, createUser, editUser, getById, deleteUser } = require('../controllers/users.controllers');
const { createUsersValidations, deleteUserValidation } = require('../helpers/validations');
const { validateToken, validateRoll } = require('../middlewares/auth');
const { validateFields } = require('../middlewares/validateFields');

route.get('/', validateToken, validateRoll, getAllUsers);

route.get('/getById/:id', validateToken, validateRoll, getById);

route.post('/create', [createUsersValidations.email, createUsersValidations.password], validateFields, createUser);

route.patch('/edit/:id', validateToken, validateRoll, editUser);

route.delete('/delete/:id', validateToken, validateRoll, [deleteUserValidation.id], validateFields, deleteUser);

module.exports = route;
