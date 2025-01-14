const express = require('express');
const { getActivityTracks, createActivityTrack } = require('../controllers/activityTrackController');
const router = express.Router();

router.get('/', getActivityTracks)

router.post('/', createActivityTrack)

module.exports = router;

