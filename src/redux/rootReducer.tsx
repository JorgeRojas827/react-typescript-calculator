import { combineReducers } from 'redux';
import valueReducer from './values/values.reducer'

export const rootReducer = combineReducers({
    value: valueReducer,
})

export type RootState = ReturnType<typeof rootReducer>