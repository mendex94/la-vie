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
        const {paciente_id} = req.params;
        const {nome, email, idade} = req.body;
        await Pacientes.update({
            nome,
            email,
            idade

        }, {
            where: {
                paciente_id
            }
        });
        const pacienteAtualizado = await Pacientes.findByPk(paciente_id);
        res.status(200).json(pacienteAtualizado);
    },
    async deletar (req, res) {

    }
};

module.exports = PacientesController;