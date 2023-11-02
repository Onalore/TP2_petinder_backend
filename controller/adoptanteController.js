import Adoptante from "../models/adoptante";

class AdoptanteController{
    constructor(){}

    createAdoptante = async (req,res) =>{
        try {
            const nuevoAdoptante = new Adoptante(req.body);
            res.status(201).json(nuevoAdoptante);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        }

        /*obtenerAdoptantePorId: async (req, res) => {
            try {
              const adoptante = await Adoptante.findByPk(req.params.id);
              if (!adoptante) {
                return res.status(404).json({ error: 'Adoptante no encontrado' });
              }
              res.status(200).json(adoptante);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
          }*/
   
}

export default AdoptanteController