const Psicologos = require('./Psicologos')
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');

Psicologos.hasMany(Atendimentos, {
    foreignKey: 'psico_id'
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'psico_id'
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: 'paciente_id'
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'paciente_id'
});

module.exports = { Psicologos, Pacientes, Atendimentos };