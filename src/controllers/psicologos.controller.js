const { Psicologos } = require('../models')
const bcrypt = require('bcryptjs')

const psicologosController = {
    async cadastrarPsico(req, res){
        
            const { nome, email, senha, apresentacao } = req.body
            const newSenha = bcrypt.hashSync(senha, 10)
            const newPsico = await Psicologos.create({
            nome,
            email,
            senha: newSenha,
            apresentacao
        })
        res.status(201).json(newPsico)
    }
}

module.exports = psicologosController