import Refugio from "../models/refugio.js"

class RefugioController {
    async crearRefugio(req, res) {
      try {
        const nuevoRefugio = await Refugio.create(req.body);
        res.status(201).json({ok: true, message: "Refugio created"});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async obtenerRefugios(req, res) {
      try {
        const refugios = await Refugio.findAll();
        res.status(200).json(refugios);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async obtenerRefugioPorId(req, res) {
      try {
        const refugio = await Refugio.findByPk(req.params.id);
        if (!refugio) {
          return res.status(404).json({ error: 'Refugio no encontrado' });
        }
        res.status(200).json(refugio);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async actualizarRefugio(req, res) {
      try {
        const refugio = await Refugio.findByPk(req.params.id);
        if (!refugio) {
          return res.status(404).json({ error: 'Refugio no encontrado' });
        }
        refugio.set(req.body);
        await refugio.save();
        res.status(200).json(refugio);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async eliminarRefugio(req, res) {
      try {
        const refugio = await Refugio.findByPk(req.params.id);
        if (!refugio) {
          return res.status(404).json({ error: 'Refugio no encontrado' });
        }
        await refugio.destroy();
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  export default new RefugioController();