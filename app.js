import express from "express"
import adoptanteRoutes from './routes/adoptanteRoutes.js';
import mascotaRoutes from './routes/mascotaRoutes.js';
import refugioRoutes from './routes/refugioRoutes.js';

const app = express()

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

app.get('/', (req, res) => {
    res.send('Bienvenido a Petinder');
  });

app.use('/api/adoptantes', adoptanteRoutes);
app.use('/api/mascotas', mascotaRoutes);
app.use('/api/refugios', refugioRoutes);