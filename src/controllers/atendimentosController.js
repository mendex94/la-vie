const { Atendimentos, Psicologos, Pacientes } = require('../models');

const atendimentosController = {
    async cadastrar(req, res) {
        const { data_atendimento, observacao, paciente_id } = req.body;
        const { id } = req.auth;
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            observacao,
            paciente_id,
            psico_id: id
        });
        res.status(201).json(novoAtendimento);
    },

    async listarAtendimentos(req, res) {
        const atendimentos = await Atendimentos.findAll({
            include: [
                {
                    model: Psicologos,
                    attributes: ['nome']
                },
                {
                    model: Pacientes
                }
            ]
        });
        res.status(200).json(atendimentos);
    },

    async listarId(req, res) {
        const { id } = req.params;

        const atendimento = await Atendimentos.findByPk(id, {
            include: [
                {
                    model: Psicologos,
                    attributes: ['nome']
                },
                {
                    model: Pacientes
                }
            ]
        });

        if(atendimento) {
            res.status(200).json(atendimento);
        }else {
            res.status(404).json('Id não encontrado');
        }
    }
}

module.exports = atendimentosController;