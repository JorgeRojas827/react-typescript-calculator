import valuesTypes from "./values.types";

const INITIAL_STATE = {
    currentValue : null
};

const valueReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case valuesTypes.CHANGE_CURRENT_VALUE:
            return {
                ...state,
                currentValue : action.payload
            }
        default:
            return state;
    };
};

export default valueReducer;