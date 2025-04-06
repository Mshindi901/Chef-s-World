import express from 'express';
import Recipes from '../Controller/Recipe-search.js';
const router = express.Router();
router.get('/search', async (req, res) => {
    const searchTerm = req.query.searchTerm;
    if(!searchTerm){
        return res.status(400).json({
            success: false,
            message: "Enter a meal name"
        })
    }

    const result = await Recipes(searchTerm); 
    if(!result){
        return res.status(404).json({
            success: false,
            message: "No meals found"
        })
    }
    return res.status(200).json({
        success: true,
        mealSearched: result.searchedMeals,
        message: "Meals Found Successfully"
    })
})
export default router;