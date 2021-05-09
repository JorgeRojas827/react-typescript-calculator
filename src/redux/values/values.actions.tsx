import valuesTypes from './values.types';

export const setValuesAction = (value: String) => ({
    type: valuesTypes.ADD_CURRENT_VALUE,
    payload: value,
});