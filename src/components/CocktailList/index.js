import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './index.css'

export default function CocktailList() {
    const cocktailList = useSelector(state => state.cocktailList);
    console.log(cocktailList);
    return (
        <div>
           CockTail List 
        </div>
    )
}
