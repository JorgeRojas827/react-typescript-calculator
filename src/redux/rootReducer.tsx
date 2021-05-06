import { combineReducers } from 'redux';
import valueReducer from './values/values.reducer'

export default combineReducers({
    value: valueReducer,
})