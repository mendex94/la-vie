const express = require("express");
const routes = express.Router();
const PacientesController = require("../controllers/pacientesController");
const psicologosController = require('../controllers/psicologos.controller')
const authController = require('../controllers/auth.controller')
const psicologosCreateValidation = require('../validations/psicologos/create')
const authLoginValidation = require('../validations/auth/login')
const pacientesCreateValidation = require('../validations/pacientes/create');
const pacientesUpdateValidation = require('../validations/pacientes/update');

routes.post('/psicologos', psicologosCreateValidation, psicologosController.cadastrarPsico)
routes.post('/login', authLoginValidation, authController.login)


routes.get("/pacientes", PacientesController.listarTodos);
routes.get("/pacientes/:paciente_id", PacientesController.buscarPorId);
routes.post("/pacientes", pacientesCreateValidation, PacientesController.cadastrar);
routes.put("/pacientes/:paciente_id", pacientesUpdateValidation, PacientesController.atualizar);
routes.delete("/pacientes/:paciente_id", PacientesController.deletar);

module.exports = routes
