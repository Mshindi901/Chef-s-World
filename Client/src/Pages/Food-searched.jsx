export default function SearchedMeal() {
    const searchedMeals = JSON.parse(localStorage.getItem('searchedMeals'));
    return(
        <>
            <div className="w-full md:h-screen h-full m-3 flex flex-col">
                <h1 className='text-3xl text-center font-title text-orange-700'>{searchedMeals.strMeal}</h1>
                <div className='w-full grid md:grid-cols-auto grid-cols-1 gap-4'>
                    <div className='h-96 rounded-2xl shadow-2xl flex flex-col gap-2 bg-white'>
                        <img src={searchedMeals.strMealThumb} alt="Food Image" className='w-full m-2 rounded-2xl object-center h-3/4'/>
                        <p className='md:text-2xl text-xl font-bold font-title text-orange-700'>{searchedMeals.strMeal}</p>
                        <div className='flex justify-between w-full p-4'>
                            <p className='md:text-xl text-lg font-text text-slate-200'>{searchedMeals.strCategory}</p>
                            <p className='md:text-xl text-lg font-text text-black'>{searchedMeals.strArea}</p>
                        </div>
                        <button className='w-full h-max py-3 rounded-2xl bg-orange-700 hover:scale-105 text-xl font-title text-white'>Recipe</button>
                    </div>
                </div>
            </div>
        </>
    )
}