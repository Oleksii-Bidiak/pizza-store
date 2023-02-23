import React, { useState } from 'react'
import './categories.scss'

export default function Categories() {
   const [activeIndex, setActiveIndex] = useState(0)
   const categories = [
      'Всі',
      "М'ясні",
      'Вегетеріансьскі',
      'Гриль',
      'Гострі',
      'Закриті',
   ]
   const changeActivehandler = index => {
      setActiveIndex(index)
   }
   return (
      <div className="categories">
         <ul>
            {categories.map((category, index) => (
               <li
                  className={activeIndex === index ? 'active' : ''}
                  key={index}
                  onClick={() => changeActivehandler(index)}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   )
}
