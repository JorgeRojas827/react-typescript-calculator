import { combineReducers } from 'redux';
import addValueReducer from './values/values.reducer'
import addExpressionReducer from './expression/expression.reducer';

export const rootReducer = combineReducers({
    value: addValueReducer,
    expression: addExpressionReducer
})

export type RootState = ReturnType<typeof rootReducer>