const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return { 
                ...state,
                counter: state.counter + 1 
            }
        case 'DECREMENT': 
            return { 
                ...state,
                counter: state.counter - 1 
            }
        case 'ADD': 
            return { 
                ...state,
                counter: state.counter + action.value 
            }
        case 'SUBTRACT': 
            return { 
                ...state,
                counter: state.counter -action.value 
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                }),
            }
        case 'DELETE_RESULT':
            // 1 way to delete items immutably from state using slice:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.slice(id, 1);
            //
            // 2 way usinf filter:
            const updatedArray = state.results.filter((result) => action.clickedId !==  result.id)
            return {
                ...state,
                results: updatedArray,
            }
    }
    
    return state;
}

export default reducer;