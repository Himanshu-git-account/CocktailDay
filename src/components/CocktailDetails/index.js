import React from 'react'
import './index.css'

export default function CocktailDetails(props) {
    return (
        <div className = "cardContainer">
           <img src={props.strDrinkThumb} className="drinkmg" alt={props.strDrink}/>
           <div className="drinkName">{props.strDrink}</div>
        </div>
    )
}
