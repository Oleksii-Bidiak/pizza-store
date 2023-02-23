import React from 'react'
import './app.scss'
import Categories from './categories/Categories.jsx'
import Header from './header/Header.jsx'
import PizzaBlock from './pizzaBlock/PizzaBlock.jsx'
import Sort from './sort/Sort.jsx'

function App() {
   return (
      <div class="wrapper">
         <Header />
         <div class="content">
            <div class="container">
               <div class="content__top">
                  <Categories />
                  <Sort />
               </div>
               <h2 class="content__title">Все пиццы</h2>
               <div class="content__items">
                  <PizzaBlock />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
