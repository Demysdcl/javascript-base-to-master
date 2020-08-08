const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/signin', loginController.signin)

module.exports = route;
