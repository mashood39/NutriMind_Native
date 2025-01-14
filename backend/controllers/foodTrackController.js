const FoodTrack = require('../models/foodTrackModel')

const getFoodTracks = async (req, res) => {
    try {
        const foodTracks = await FoodTrack.find().sort({ createdAt: -1})
        res.status(200).json({foodTracks})
    } catch ( error){
        console.error("error in fetching the food tracks", error)
        res.status(500).json({ message: "error in fetching"})
    }
}

const createFoodTrack = async (req, res) => {
    try{
        const newFoodTrack = new FoodTrack(req.body)
        await newFoodTrack.save();
        res.status(201).json({message: "food track added "})
    } catch (error ){
        console.error("error in adding in food track", error)
        res.status(500).json({message: "error in adding food track"})
    }
}

module.exports = {
    getFoodTracks,
    createFoodTrack
}