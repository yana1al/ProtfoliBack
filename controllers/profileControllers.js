const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, bio, email, socialLinks, projects } = req.body;
  try {
    let profile = await Profile.findOne();
    if (profile) {
      profile.name = name;
      profile.bio = bio;
      profile.email = email;
      profile.socialLinks = socialLinks;
      profile.projects = projects;
      await profile.save();
    } else {
      profile = new Profile({ name, bio, email, socialLinks, projects });
      await profile.save();
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
