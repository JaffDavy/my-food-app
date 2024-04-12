import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import MealItem from "../MealItem/MealItem";

function Favorite() {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavorites = JSON.parse(window.localStorage.getItem('favorites')) || []
        setFavorites(storedFavorites)
    }, [])
    console.log(favorites)

    return (
        <div className='hero-page'>
            <div className='app'>
                <h1>Favorite Recipes</h1>

                {favorites.length > 0 ? (
                        favorites.map((favorite) => favorite.strMeal)
                ) : (
                    <p>No favorite recipes found.</p>
                )}
            </div>
            <button id='fav' onClick={() => navigate("/home")}>Back</button>
        </div>
    );
}

export default Favorite
