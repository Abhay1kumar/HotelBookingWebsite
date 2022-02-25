import React from 'react'
import './Cards.css'

export default function Cards({src,title,description,price}) {
  return (

        <div className="cards">
            <div className="image">
                <img src={src} alt="img"/>
            </div>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <h2>{price}</h2>
        </div>

  )
}
