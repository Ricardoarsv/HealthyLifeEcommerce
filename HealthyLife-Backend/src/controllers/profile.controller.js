const Profile = require("../models/profile.model");

class ProfileController {
  constructor() {
    this.profile = new Profile();
    this.getProfile = this.getProfile.bind(this);
  }

  async getProfile(req, res) {
    try {
      const profiles = await this.profile.getProfile();
      res.status(200).json(profiles);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProfileController();
