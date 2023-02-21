import './app.scss'
import Categories from './categories/Categories'
import Header from './header/Header'
import PizzaBlock from './pizzaBlock/PizzaBlock'
import Sort from './sort/Sort'

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
