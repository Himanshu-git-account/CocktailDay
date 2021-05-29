import {put, call, takeEvery, all} from 'redux-saga/effects';

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
function getApi(){
    return fetch(apiUrl,{
        method: 'GET'
    }).then(response => response.json())
    .catch((err)=>{ throw err})
}

function* fetchCocktail(){
    try{
        const cocktailList = yield call(getApi)
        yield put({type: "GET_COCKTAIL_SUCCESS", cocktailList:cocktailList.drinks.slice(4)})
    }catch(e){
        yield put({ type: "GET_COCKTAIL_FAILED",message:e.message})
    }
}

function* cocktailSAga() {
    yield takeEvery('GET_COCKTAIL_REQUESTED', fetchCocktail)
}

export default function* rootSaga() {
    yield all([
        cocktailSAga(),
    ])
}