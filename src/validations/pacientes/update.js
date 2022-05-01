const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        nome: Joi.string(),
        email: Joi.string().email(),
        senha: Joi.string().min(8),
        apresentacao: Joi.string()
    })
});