import * as actionTypes from '../actions/actions';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result,
                }),
            }
        case actionTypes.DELETE_RESULT:
            // 1 way to delete items immutably from state using slice:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.slice(id, 1);
            //
            // 2 way usinf filter:
            const updatedArray = state.results.filter((result) => action.id !== result.id)
            return {
                ...state,
                results: updatedArray,
            }
    }

    return state;
}

export default reducer;