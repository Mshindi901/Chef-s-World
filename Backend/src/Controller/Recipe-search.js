/* eslint-disable no-undef */
import dotenv from 'dotenv';
import RandomRecipe from '../../../Client/src/Components/Random-recipe.js';
dotenv.config();
const searchMeals = [];
export default async function Recipes(searchTerm){
    const searchUrl = process.env.SearchRecipe;
    const queryParams ={
        s: searchTerm,
    }
    try {
        const url = new URL(searchUrl);
        const searchParams = new URLSearchParams(queryParams);
        url.search = searchParams.toString();
    
        const data = await fetch(url);
        const result = await data.json();
        if(!result.ok){
            throw new Error("Error fetching data from API");
        }
        return {
            searchedMeals: searchMeals.push(result),
            randomMeals: RandomRecipe()
        } ; 
    } catch (error) {
        console.log(error);
    }

}