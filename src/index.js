const express = require("express");
const app = express();
const routes = require("./routes/routes");

//Service port
app.set("port", 4001);

//Send and receive throught the body
app.use(express.json());

//Routes
app.use(routes);

//Init Service
app.listen(app.get("port"), () =>
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
);
