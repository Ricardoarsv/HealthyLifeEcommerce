const defaultProfiles = require("../JSON/defaultProfiles.json");
class Profile {
  constructor() {}

  async getProfile() {
    return defaultProfiles;
  }
}

module.exports = Profile;
