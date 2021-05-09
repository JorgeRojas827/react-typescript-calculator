import { MouseEvent, useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button";
// import {operators} from './Operators'
import { useDispatch } from "react-redux";
import { setValuesAction } from "../redux/values/values.actions";

interface valueInterface {
    value: string;
    key: string
}

export const Keyboard = () => {
    const [values, setValues] = useState([]);
    var valuesArray = [] as Array<string>;

    const dispatch = useDispatch()
    const changeState = () => {
        dispatch(setValuesAction(valuesArray.join('')))
    }

    const getData = async () => {
        try {
            const res = await axios.get("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/2");
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

    const handleClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
            const valor = currentTarget.value;
            addValue(valor);
    }

    return (
        <div className="w-full h-full absolute grid grid-cols-4 gap-1 grid-flow-row ">
            { values.map((el: valueInterface) => {
                switch (el.key) {
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
