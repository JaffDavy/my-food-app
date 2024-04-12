import React, { useState } from 'react'
import RecipeDetails from '../RecipeDetails/recipeDetails';
import MealItem from '../MealItem/MealItem';

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [ingredients, setIngredients] = useState([])

  const handleSearch = async (searchTerm) => {
    try {
      if (searchTerm.trim() === '') {
        setRecipes([]) // Clear recipes if the search term is empty
        return
      }

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const data = await response.json()

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error('Error fetching recipes', error)
    }
  };

  const handleRecipeClick = async (recipeId) => {
    if (!recipeId) {
      setSelectedRecipe(null)
      setIngredients([])
      return
    }

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
      const data = await response.json()

      if (data.meals && data.meals.length > 0) {
        setSelectedRecipe(data.meals[0])

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (data.meals[0][`strIngredient${i}`]) {
            ingredients.push({
              ingredient: data.meals[0][`strIngredient${i}`],
              measure: data.meals[0][`strMeasure${i}`]
            })
          } else {
            break
          }
        }
        setIngredients(ingredients)
      }
    } catch (error) {
      console.error('Error fetching recipe details', error)
    }
  }

  const handleInputChange = (event) => {
    setSelectedRecipe(null)
    setIngredients([])
    setSearchTerm(event.target.value)
    handleSearch(event.target.value)
      console.log(searchTerm)
 
    
  }

  return (
    <div className='search'>
      <input id='search'
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a food recipe to search"
      />
      <div className='recipe-list'>
        {recipes.map((recipe) => <MealItem key={recipe.idMeal} recipe={recipe} handleRecipeClick = { handleRecipeClick } /> )}
      </div>
      {selectedRecipe && <RecipeDetails selectedRecipe={selectedRecipe} ingredients={ingredients} />}
    </div>
  );
};

export default RecipeSearch;
