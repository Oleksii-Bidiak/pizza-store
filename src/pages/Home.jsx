import axios from 'axios'
import { useEffect, useState } from 'react'
// import './app.scss'
import Categories from '../components/categories/Categories'
import PizzaBlock from '../components/pizzaBlock/PizzaBlock'
import { PizzaLoader } from '../components/pizzaBlock/PizzaLoader'
import Sort from '../components/sort/Sort'

export function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchItems = async () => {
        const response = await axios.get(
            'https://63f7a28ce40e087c959331c6.mockapi.io/items'
        )
        console.log(response.data)
        if (response.status === 200) {
            setIsLoading(false)
            setItems(response.data)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => (
                          <PizzaLoader key={index} />
                      ))
                    : items.map(item => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </>
    )
}
