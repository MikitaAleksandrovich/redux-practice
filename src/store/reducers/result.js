import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: [],
}

// 1 way to delete items immutably from state using slice:
// const id = 2;
// const newArray = [...state.results];
// newArray.slice(id, 1);
// 2 way using filter:
const deleteResult = (state, action) => {
    const updatedResultsArray = state.results.filter((result) => action.id !== result.id)
    return updateObject(state, {results: updatedResultsArray})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result * 2})})
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)
    }
    return state;
}

export default reducer;