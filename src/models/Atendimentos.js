const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');

const Atendimentos = db.define("Atendimentos", {
    atendimento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    data_atendimento: {
        type: DataTypes.DATE,
    },

    observacao: {
        type: DataTypes.STRING,
    },

    paciente_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: Pacientes,
            key: 'paciente_id:'
        }
    },

    psico_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: Psicologos,
            key: 'psico_id'
        }
    }


}, {
    tableName: "atendimentos",
    timestamps: false
}
);

module.exports = Atendimentos;