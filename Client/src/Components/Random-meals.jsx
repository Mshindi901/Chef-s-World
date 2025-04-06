import RandomRecipe from "./Random-recipe.js";
import {useEffect, useState} from 'react';
export default function RandomSearch(){
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                await RandomRecipe();
                const randomSearchedMeals = JSON.parse(localStorage.getItem('randomMeals'));
                if(randomSearchedMeals){
                    setMeals(randomSearchedMeals);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchMeals();
    }, []);
    return(
        <>
            <div className="w-full md:h-screen h-full m-3 flex flex-col">
                <h1 className='text-3xl text-center font-title text-orange-700'>Our Favorites</h1>
                <div className='w-full grid md:grid-cols-5 grid-cols-1 gap-4 p-4'>
                    {
                        meals.map((meal, index) =>(
                            <div key={index} className='h-fit p-4 rounded-2xl shadow-2xl flex flex-col gap-2 bg-white'>
                                <img src={meal.strMealThumb} alt="Food Image" className='w-full m-2 rounded-2xl object-center h-3/4'/>
                                <p className='md:text-2xl text-xl font-bold font-title text-orange-700'>{meal.strMeal}</p>
                                <div className='flex justify-between w-full p-4'>
                                    <p className='md:text-xl text-lg font-text text-black'>{meal.strCategory}</p>
                                    <p className='md:text-xl text-lg font-text text-black'>{meal.strArea}</p>
                                </div>
                                <button className='w-full h-max py-3 rounded-2xl bg-orange-700 hover:scale-105 text-xl font-title text-white'>Recipe</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}