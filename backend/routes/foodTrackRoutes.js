const express = require('express');
const { getFoodTracks, createFoodTrack } = require('../controllers/foodTrackController');

const router = express.Router();

router.get('/', getFoodTracks)

router.post('/', createFoodTrack)

module.exports = router