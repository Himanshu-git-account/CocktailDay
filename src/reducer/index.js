const initialState = {
    cocktailList:[],
    loading: false,
    error: null

};
function rootReducer(state = initialState,action){
    switch(action.type){
        case 'GET_COCKTAIL_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'GET_COCKTAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                cocktailList: action.cocktailList
        }
        case 'GET_COCKTAIL_FAILED':
        return {
            ...state, 
            loading: false,
            error: action.message
        }
        case 'COCKTAIL_RECIEVED':
            return {...state, cocktailList: action, loading:false}
        default:
        return state
    }
}

export default rootReducer;