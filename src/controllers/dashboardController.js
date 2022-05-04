const { Atendimentos, Psicologos, Pacientes } = require('../models');

const dashboardController = {
    async numeroDeAtendimentos(req, res) {
        const atendimentos = await Atendimentos.count();
        res.status(200).json(atendimentos);
      },
      async numeroDePsicologos(req, res) {
        const psicologos = await Psicologos.count();
        res.status(200).json(psicologos);
      },
      async numeroDePacientes(req, res) {
        const pacientes = await Pacientes.count();
        res.status(200).json(pacientes);
      },

      async media(req, res) {
       
        const listaDePsicologos = await Psicologos.findAll({
            include: Atendimentos
        });
        let quantAtendimentos = 0
        listaDePsicologos.forEach(psicologo => {
            quantAtendimentos += psicologo.Atendimentos.length;
        });
        const media = quantAtendimentos/listaDePsicologos.length
 
         res.json(media);
     }
      
}
module.exports = dashboardController