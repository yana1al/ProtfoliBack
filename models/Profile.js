const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  email: String,
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  },
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ]
});

module.exports = mongoose.model('Profile', ProfileSchema);
