import axios from 'axios';
import { useState, useEffect, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setValuesAction } from '../redux/values/values.actions';
import { setExpressionAction } from '../redux/expression/expression.actions';
import { operationRegEx, additionalOperationRegEx, singleOperationRegEx, singleOperation } from '../helpers/OperationsRegEx';
import { obtainResults } from '../helpers/ObtainResults';
import { obtainSingleResults } from '../helpers/ObtainSingleResults';

export var expressionsArray = [] as Array<any>;

export const useCalculator = () => {

    const [buttonValues, setButtonValues] = useState([]);
    const [error, setError] = useState(false)
    var valuesArray = [] as Array<string>;

    const dispatch = useDispatch();
    const changeState = () => {
        dispatch(setValuesAction(valuesArray.join('')))
    }

    const getData = async () => {
        try {
            const res = await axios.get("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/13");
            setButtonValues(res.data.botones);
        } catch (err) {
            console.log("ERROR: ", err);
        }
    }
    
    useEffect(() => {
        getData();
    }, [])

    const addValue = (newValue: string) => {
        valuesArray.push(newValue);
        changeState()
    }

    const clearArray = () => {
        valuesArray = [];
        changeState()
    }

    const deleteLastItem = () => {
        valuesArray.pop();
        changeState()
    } 

    const changeExpression = (exp: Array<String>, operation: Function) => {
        dispatch(setExpressionAction(exp));
        let result = operation(valuesArray).toString();
        expressionsArray.push({exp, result})
        clearArray();
        addValue(result);
    }

    const calculateExpression = () => {
        const expression = valuesArray;
        const testRegExp = (regexp: RegExp) => expression.join('').match(regexp);
        if (testRegExp(operationRegEx)){
            changeExpression(expression, obtainResults)
        } else if (testRegExp(additionalOperationRegEx)) {
            changeExpression(expression, obtainSingleResults)
        } else if (testRegExp(singleOperationRegEx)) {
            changeExpression(expression, singleOperation)
        }
         else {
            setError(true);
            clearArray();
            addValue('Syntax error')
        }   
    }

    const handleClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
        const value = currentTarget.value;
        error && clearArray(); setError(false)
        !error && addValue(value);
    }

    return {
        buttonValues,
        valuesArray,
        error,
        expressionsArray,
        getData,
        addValue,
        clearArray,
        deleteLastItem,
        calculateExpression,
        handleClick
    }
}
