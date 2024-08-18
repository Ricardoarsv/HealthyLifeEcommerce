const Preferences = require("../models/preferences.model");

class PreferencesController {
  constructor(preferences) {
    this.preferences = preferences;
  }

  async getRecomendations(req, res) {
    try {
      const preferences = new Preferences(req.body);
      const recomendations = await preferences.getPreferences();
      console.log(recomendations);
      res.status(200).json(recomendations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PreferencesController();
