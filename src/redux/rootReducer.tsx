import { combineReducers } from 'redux';
import addValueReducer from './values/values.reducer'

export const rootReducer = combineReducers({
    value: addValueReducer,
})

export type RootState = ReturnType<typeof rootReducer>