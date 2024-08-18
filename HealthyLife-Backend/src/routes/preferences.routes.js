const PreferencesController = require("../controllers/preferences.controller");
const { Router } = require("express");

const preferencesRouter = Router();

preferencesRouter.post(
  "/getRecomendations",
  PreferencesController.getRecomendations
);

module.exports = preferencesRouter;
