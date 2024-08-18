const ProfileController = require("../controllers/profile.controller");

const { Router } = require("express");

const profileRouter = Router();

profileRouter.get("/getProfiles", ProfileController.getProfile);

module.exports = profileRouter;
