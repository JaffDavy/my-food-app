import ReactDOM from "react-dom/client"
// import RecipeSearch from './RecipeSearch'
import React from 'react'
import './App.css'
import Favorite from "./Pages/Favorite"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"

function App() {
  return (
    <>
    {/* //   <div className='hero-page'>
    //     <div>
    //       <h1>WELCOME TO MY FOOD RECIPE APP</h1>
    //     </div>
    //     <div className='app'>
    //       <h1>Enter Your Meal Below</h1>
    //       <RecipeSearch />
    //     </div>
    //   </div> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App