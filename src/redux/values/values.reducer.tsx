import valuesTypes from "./values.types";

const initialState = {
    currentValue : '',
}
interface actionTypes {
    type: String;
    payload: String
}

const valueReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case valuesTypes.ADD_CURRENT_VALUE:
            return {
                ...state,
                currentValue : action.payload
            }
        default:
            return state;
    };
};

export default valueReducer;