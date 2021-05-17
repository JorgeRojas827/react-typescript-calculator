import axios from 'axios';
import { MouseEvent, useEffect, useState } from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { operationRegEx, singleOperationRegEx,
     obtainResults, singleOperation, additionalOperationRegEx, additionalOperation } from './Operators';
import { setValuesAction } from "../redux/values/values.actions";
import { setExpressionAction }  from '../redux/expression/expression.actions'

interface valueInterface {
    value: string;
    key: string
}

export var expressionsArray = [] as Array<any>;

export const Keyboard = () => {
    const [values, setValues] = useState([]);
    const [error, setError] = useState(false)
    var valuesArray = [] as Array<string>;

    const dispatch = useDispatch();
    const changeState = () => {
        dispatch(setValuesAction(valuesArray.join('')))
    }

    const getData = async () => {
        try {
            const res = await axios.get("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/7");
            setValues(res.data.botones);
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
            changeExpression(expression, additionalOperation)
        } else if (testRegExp(singleOperationRegEx)) {
            changeExpression(expression, singleOperation)
        }   else {
            setError(true);
            clearArray()    
            addValue('Syntax error')
        }   
    }

    const handleClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
            const value = currentTarget.value;
            error && clearArray(); setError(false)
            !error && addValue(value);
    }

    return (
        <div className="w-full h-full absolute grid grid-cols-4 gap-1 grid-flow-row ">
            { values.map((el: valueInterface) => {
                switch (el.key) {
                    case '23' :
                        return <Button
                        handleClick = { calculateExpression }
                        button = { el.value }
                        key = { el.key } />
                    case '3':
                        return <Button
                            handleClick = { deleteLastItem }
                            button = { el.value }
                            key = { el.key } />
                    case '2':
                        return <Button
                            handleClick = { clearArray }
                            button = { el.value }
                            key = { el.key } />
                    case '1':
                        return <Button
                            handleClick = { clearArray }
                            button = { el.value }
                            key = { el.key } />
                    default:
                        return <Button
                            handleClick = { handleClick }
                            button = { el.value }
                            key = { el.key } />
                }
            })}
        </div>
    )
}
