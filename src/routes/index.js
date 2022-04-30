const express = require("express");
const routes = express.Router();
const PacientesController = require("../controllers/pacientesController");

routes.get("/pacientes", PacientesController.listarTodos);
routes.get("/pacientes/:paciente_id", PacientesController.listarTodos);
routes.post("/pacientes", PacientesController.cadastrar);
routes.put("/pacientes/:id", PacientesController.atualizar);
routes.delete("/pacientes/:id", PacientesController.deletar);


module.exports = routes;
