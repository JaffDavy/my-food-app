import { useEffect, useState } from "react"

export default function MealItem({ recipe, handleRecipeClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const getLocalData = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []

    const item = favorites.find((meal) => {
      return meal.idMeal === recipe.idMeal
    })

    return {
      favorites,
      item,
    }
  }

  function addFavorite(favorites) {
    const update = [...favorites, recipe]

    localStorage.setItem("favorites", JSON.stringify(update))
    setIsFavorite(true)
  }

  const removeFavorite = (favorites) => {
    const update = favorites.filter((meal) => {
      return meal.idMeal !== recipe.idMeal
    })

    localStorage.setItem("favorites", JSON.stringify(update))
    setIsFavorite(false)
  }

  function handleFavorites() {
    const { item, favorites } = getLocalData();

    if (item) {
      removeFavorite(favorites)
    }
    else {
      addFavorite(favorites)
    }
  }

  useEffect(() => {
    const { item } = getLocalData();

    if (item) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [])

  return (
    <div key={recipe.idMeal} onClick={() => handleRecipeClick(recipe.idMeal)}>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} height={400} width={400} />
      <button onClick={handleFavorites}>
        {isFavorite ? "remove from favorites" : "add to favorites"}
      </button>
    </div>
  )
}