const express = require('express');
const router = express.Router();
const { getProfessionalData } = require('../controllers');

router.get('/professional', getProfessionalData);

module.exports = router;
