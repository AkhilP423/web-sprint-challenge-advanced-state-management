import { START_FETCH, FETCH_SUCCESS, ERROR, ADD_SMURF, SET_ERROR} from "../actions/index"

const initialState = {
    smurfs: [],
    loading: false,
    error:''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCH:
            return {
                ...state,
                loading: true,
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                smurfs: action.payload,
            }

        case ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        case ADD_SMURF:
            return{
                ...state,
                loading: false,
                smurfs: [...state.smurfs, action.payload]
            }

        case SET_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            } 

        default:
            return state;
    } 

}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.