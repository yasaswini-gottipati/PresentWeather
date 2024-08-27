const express = require('express');
const { getUserData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUserData);

module.exports = router;
