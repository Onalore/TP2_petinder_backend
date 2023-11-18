import express from "express";
import router from "./routes/index.js";
import sequelize from "./connection/sequelize.js";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Bienvenido a Petinder");
});

//Middleware para analizar el body de la solicitud como JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.set("port", PORT);

await sequelize.sync({ force: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
