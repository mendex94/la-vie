const db = require('../database')
const { DataTypes } = require('sequelize')

const Psicologos = db.define('Psicologos', {
    psico_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    apresentacao: {
        type: DataTypes.STRING   
    }
}, {
    tableName: 'psicologos',
    timestamp: false    
})

module.exports = Psicologos