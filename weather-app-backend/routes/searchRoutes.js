// searchRoutes.js
const express = require('express');
const { saveSearch, getSearchHistory } = require('../controllers/searchController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, saveSearch);
router.get('/', authMiddleware, getSearchHistory);

module.exports = router;


