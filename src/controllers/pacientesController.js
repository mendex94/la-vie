const Pacientes = require("../models/Pacientes.js");

const PacientesController = {
    async listarTodos(req, res) {
        const pacientes = await Pacientes.findAll();
        res.json(pacientes);
    },
    async buscarPorId(req, res) {
        const { paciente_id } = req.params;
        const paciente = await Pacientes.findByPk({
            where: {
                paciente_id
            }
        });
        res.json(paciente);
    },
    async cadastrar(req, res) {
        const {nome, email, idade} = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade

        });
        res.json(novoPaciente);
    },
    async atualizar(req, res) {

    },
    async deletar (req, res) {

    }
};

module.exports = PacientesController;