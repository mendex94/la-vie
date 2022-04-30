const { Psicologos } = require('../models')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const bcrypt = require('bcryptjs')

const authController = {
    async login(req, res){
        const { email, senha } = req.body
        const psicologo = await Psicologos.findOne({
            where: {
                email,
            }
        })
        if(!psicologo) {
            return res.status(400).json('Usuario não cadastrado!')
        }
        if(!bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json('Senha incorreta!')
        }

        const token = jwt.sign({
            id: psicologo.psico_id,
            email: psicologo.email,
            nome: psicologo.nome
        },
        secret.key
        )

        return res.json(token)
    }
}

module.exports = authController