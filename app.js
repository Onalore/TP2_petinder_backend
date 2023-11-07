import express from "express";
// import adoptanteRoutes from "./routes/adoptanteRoutes.js";
// import mascotaRoutes from "./routes/mascotaRoutes.js";
// import refugioRoutes from "./routes/refugioRoutes.js";
import router from "./routes/index.js";
import sequelize from "./connnection/sequelize.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a Petinder");
});

app.use("/api", router);
// app.use("/adoptantes", adoptanteRoutes);
// app.use("/mascotas", mascotaRoutes);
// app.use("/refugio", refugioRoutes);

await sequelize.sync({ force: true });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
