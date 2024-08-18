// Paquetes de Node.js
const express = require("express");
const dotenv = require("dotenv");
const pc = require("picocolors");
const cors = require("cors");

// Rutas de la API
const preferencesRouter = require("../routes/preferences.routes");
const profileRouter = require("../routes/profile.routes");
const productsRouter = require("../routes/product.routes");

// utils
const webUrl = require("../utils/ApiUrl");

// Acceso a variables de entorno
dotenv.config();

class Server {
  constructor() {
    // Inicialización del servidor
    this.port = process.env.PORT;
    this.app = express();

    // Routes
    this.whiteList = [`${webUrl}`];

    // Middlewares
    this.middlewares();

    // Routes
    this.preferencesRoutePath = "/api/preferences";
    this.productsRoutePath = "/api/products";
    this.profilesRoutePath = "/api/profiles";
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

  routes() {
    this.app.use(this.preferencesRoutePath, preferencesRouter);
    this.app.use(this.productsRoutePath, productsRouter);
    this.app.use(this.profilesRoutePath, profileRouter);
  }

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
