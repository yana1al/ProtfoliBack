const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');

const router = express.Router();

router.get('/', getProfile);
router.post('/', updateProfile);

module.exports = router;
