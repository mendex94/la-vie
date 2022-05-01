const Pacientes = require("../models/Pacientes.js");

const PacientesController = {
  async listarTodos(req, res) {
    try {
      const pacientes = await Pacientes.findAll();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).send("Erro ao recuperar dados do banco");
    }
  },
  async buscarPorId(req, res) {
    const { paciente_id } = req.params;
    try {
      const paciente = await Pacientes.findByPk(paciente_id);
      if (paciente) {
        res.status(200).json(paciente);
      } else {
        res.status(404).json("Id não encontrado");
      }
    } catch (error) {
      res.status(500).send("Erro ao recuperar dados do banco");
    }
  },
  async cadastrar(req, res) {
    const { nome, email, idade } = req.body;
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });
    res.status(201).json(novoPaciente);
  },
  async atualizar(req, res) {
    const { paciente_id } = req.params;
    const { nome, email, idade } = req.body;
    try {
      await Pacientes.update(
        {
          nome,
          email,
          idade,
        },
        {
          where: {
            paciente_id,
          },
        }
      );
      const pacienteAtualizado = await Pacientes.findByPk(paciente_id);
      res.status(200).json(pacienteAtualizado);
    } catch (error) {
      res.status(500).send("Erro ao recuperar dados do banco");
    }
  },
  async deletar(req, res) {
    const { paciente_id } = req.params;
    try {
      const paciente = await Pacientes.findByPk(paciente_id);
      if (!paciente) {
        res.status(404).send("Id não encontrado");
      } else {
        await Pacientes.destroy({
          where: {
            paciente_id,
          },
        });
        res.send("Paciente excluido com sucesso");
      }
    } catch (error) {
      res.status(500).send("Erro ao recuperar dados do banco");
    }
  },
};

module.exports = PacientesController;
