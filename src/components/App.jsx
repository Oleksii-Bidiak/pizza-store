import axios from 'axios'
import { useEffect, useState } from 'react'
import './app.scss'
import Categories from './categories/Categories'
import Header from './header/Header'
import PizzaBlock from './pizzaBlock/PizzaBlock'
import Sort from './sort/Sort'

function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchItems = async () => {
        const response = await axios.get(
            'https://63f7a28ce40e087c959331c6.mockapi.io/items'
        )
        if (response.status === 200) {
            setIsLoading(false)
            setItems(response.data)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

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
                        {isLoading ? (
                            <h1>Завантаження...</h1>
                        ) : (
                            items.map(item => (
                                <PizzaBlock key={item.id} {...item} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
