import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import usersRoutes from "./components/users/users.routes.js";
import tasksRoutes from "./components/tasks/tasks.routes.js";
import categoriesRoutes from "./components/categories/categories.routes.js";

initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.log(e));

db.sync()
  .then(() => console.log("Base de datos sync"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(tasksRoutes);
app.use(categoriesRoutes);

app.get('/', (req, res) => {
  res.send('OK');
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})