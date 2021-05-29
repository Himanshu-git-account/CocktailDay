import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './index.css'
import {getCocktail} from '../../actions'
import CocktailDetails from '../CocktailDetails';
export default function CocktailList() {
    const dispatch = useDispatch();
    const cocktailList = useSelector(state => state.cocktailList);
    const loading = useSelector(state => state.loading)
    useEffect(() => {
        dispatch(getCocktail())  
    }, [])
    console.log(cocktailList);
    return (
        <div className="cocktailList">
            {loading && <p>LOading</p>}
            {cocktailList.length>0 && cocktailList.map((cocktail)=>{
               return <CocktailDetails key={cocktail.idDrink} strDrink={cocktail.strDrink} strDrinkThumb ={cocktail.strDrinkThumb}/>
            })}
           HIhi
        </div>
    )
}
