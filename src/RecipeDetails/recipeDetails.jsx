import { useState } from "react";

export default function RecipeDetails({selectedRecipe, ingredients}) {
    const [showIngredients, setShowIngredients] = useState(false);

    return (
        <div className='recipe-details'>
            <h2>{selectedRecipe.strMeal}</h2>
            <img id='pic' src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} height={400} width={400} />
            {
                showIngredients && (
                    <>
                        <h3>Ingredients:</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.measure} {ingredient.ingredient}</li>
                            ))}
                        </ul>
                    </>
                )}
            <button onClick={() => setShowIngredients(prev => !prev)}>{showIngredients ? 'Hide' : 'showIngredient'}</button>
            <p>{selectedRecipe.strInstructions}</p>
        </div>
    )
}