import expressionTypes from "./expression.types";

const initialState = {
    currentExpression : '',
}
interface actionTypes {
    type: String;
    payload: Array<Object>;
}

const addExpressionReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case expressionTypes.SET_CURRENT_EXPRESSION:
            return {
                ...state,
                currentExpression : action.payload
            }
        default:
            return state;
    };
};

export default addExpressionReducer;