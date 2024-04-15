import RecipeSearch from '../RecipeSearch'
import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate()
  return (
    <>
      <div className='hero-page'>
        <div>
          <h1>WELCOME TO MY FOOD RECIPE APP</h1>
        </div>
        <div className='app'>
          <h1>Enter Your Meal Below</h1>
          <RecipeSearch />
        </div>
      </div>
      <button id='fav' onClick={() => navigate("/favorite")}>View favorites</button>

    </>
  )
}

export default Home