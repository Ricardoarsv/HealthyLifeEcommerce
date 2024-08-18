const processPreferences = require("../utils/proccessPreferences");

class Preferences {
  constructor(preferences) {
    this.preferences = preferences;
  }

  async getPreferences() {
    try {
      const preferences = await processPreferences(this.preferences);
      return preferences;
    } catch (error) {
      console.error("Error processing preferences:", error);
      throw error;
    }
  }
}

module.exports = Preferences;
