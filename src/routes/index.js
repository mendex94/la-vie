const express = require('express')
const psicologosController = require('../controllers/psicologos.controller')
const authController = require('../controllers/auth.controller')
const psicologosCreateValidation = require('../validations/psicologos/create')
const authLoginValidation = require('../validations/auth/login')
const routes = express.Router()

routes.post('/psicologos', psicologosCreateValidation, psicologosController.cadastrarPsico)
routes.post('/login', authLoginValidation, authController.login)

module.exports = routes