const Server = require("./src/models/server.model.js");

// Inicia el servidor
const App = new Server();
App.routes();
App.listen();

module.exports = App;
