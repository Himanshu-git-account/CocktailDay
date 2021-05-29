import {ADD_COCKTAIL, GET_COCKTAIL, GET_COCKTAIL_REQUESTED} from '../constants/action-types'
export function addCockTail(payload) {
    return { type: ADD_COCKTAIL, payload}
}

export const getCocktail = (cocktails) => ({
    type: GET_COCKTAIL_REQUESTED,
    payload: cocktails
})