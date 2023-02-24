import React, { useState } from 'react'
import './categories.scss'

export default function Categories() {
    const [activeCategory, setActiveCaterory] = useState('Всі')
    const categoties = [
        'Всі',
        "М'ясні",
        'Вегетеріанські',
        'Гриль',
        'Гострі',
        'Закриті',
    ]
    const changeCategory = category => {
        setActiveCaterory(category)
    }
    return (
        <div className="categories">
            <ul>
                {categoties.map((category, index) => (
                    <li
                        key={index}
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => changeCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}
