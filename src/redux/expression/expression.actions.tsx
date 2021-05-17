import expressionTypes from './expression.types';

export const setExpressionAction = (expression: Array<Object>) => ({
    type: expressionTypes.SET_CURRENT_EXPRESSION,
    payload: expression,
})

