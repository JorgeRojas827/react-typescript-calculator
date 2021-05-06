import valuesTypes from './values.types';

export const setValuesAction = (value: string) => ({
    type: valuesTypes.CHANGE_CURRENT_VALUE,
    payload: value
});