// Paquetes de Node.js
const express = require("express");
const dotenv = require("dotenv");
const pc = require("picocolors");
const cors = require("cors");

// Rutas de la API
// Aqui se anexaran las rutas

// utils
const webUrl = require("../utils/ApiUrl");

// Acceso a variables de entorno
dotenv.config();

class Server {
  constructor() {
    // Inicialización del servidor
    this.app = express();

    // Routes
    this.whiteList = [`${webUrl}`];

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors({ origin: this.whiteList, credentials: true }));

    // Parsear las respuestas y cuerpos de las peticiones
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        pc.dim("--------------------------------------------------"),
        pc.blue("\n HealthyLife Backend app listening on localhost"),
        pc.green("Press Ctrl+C to quit \n"),
        pc.dim("--------------------------------------------------")
      );
    });
  }
}

module.exports = Server;
