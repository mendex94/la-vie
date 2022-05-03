const express = require("express");
const routes = express.Router();
const PacientesController = require("../controllers/pacientesController");
const psicologosController = require('../controllers/psicologos.controller');
const atendimentosController = require('../controllers/atendimentosController');
const authController = require('../controllers/auth.controller')
const psicologosCreateValidation = require('../validations/psicologos/create')
const authLoginValidation = require('../validations/auth/login')
const pacientesCreateValidation = require('../validations/pacientes/create');
const pacientesUpdateValidation = require('../validations/pacientes/update');
const atendimentosCreateValidation = require('../validations/atendimentos/create');
const auth = require('../middleware/auth');

// Rotas CRUD psicólogo
routes.post('/psicologos', psicologosCreateValidation, psicologosController.cadastrarPsico)
routes.get('/psicologos', psicologosController.listarPsico)
routes.get('/psicologos/:id', psicologosController.listarId)
routes.put('/psicologos/:id', psicologosCreateValidation, psicologosController.atualizarPsico)
routes.delete('/psicologos/:id', psicologosController.deletarPsico)

// Rota Login
routes.post('/login', authLoginValidation, authController.login)

// Rotas CRUD paciente
routes.get("/pacientes", PacientesController.listarTodos);
routes.get("/pacientes/:id", PacientesController.buscarPorId);
routes.post("/pacientes", pacientesCreateValidation, PacientesController.cadastrar);
routes.put("/pacientes/:id", pacientesUpdateValidation, PacientesController.atualizar);
routes.delete("/pacientes/:id", PacientesController.deletar);

// Rotas CRUD atendimento
routes.post('/atendimentos', auth, atendimentosCreateValidation, atendimentosController.cadastrar);
routes.get('/atendimentos', auth, atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', auth, atendimentosController.listarId);


// Rotas CRUD Dashboard

routes.get("/dashboard/numero-paciente", PacientesController.numeroDePacientes);
routes.get("/dashboard/numero-psicologo", psicologosController.numeroDePsicologos);
routes.get("/dashboard/numero-atendimento", atendimentosController.numeroDeAtendimentos);
routes.get("/dashboard/numero-media-atendimento.", PacientesController.listarTodos);

module.exports = routes;
