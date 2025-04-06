export default async function RandomRecipe() {
    const randomMeals = [];
    try {
        const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
        for (let i = 0; i < 10; i++) {
            const response = await fetch(randomMealUrl);
            const data = await response.json();
            randomMeals.push(data.meals[0]);
        }

        return localStorage.setItem('randomMeals', JSON.stringify(randomMeals));;
    } catch (error) {
        console.log(error);
    }
}