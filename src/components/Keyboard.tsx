import { MouseEvent, useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button"
import { useDispatch } from "react-redux";
import { setValuesAction } from "../redux/values/values.actions";

interface valueInterface {
    value: string;
    key: string
}

export const Keyboard = () => {
    const [values, setValues] = useState([]);
    const [valuesArray, setValuesArray] = useState([] as Array<string>)

    const dispatch = useDispatch()

    const getData = async () => {
        try {
            const res = await axios.get("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/2");
            setValues(res.data.botones)
        } catch (err) {
            console.log("ERROR: ", err)
        }
    }

    const addValue = (newValue: string) => {
        valuesArray.push(newValue);
    }

    const clearArray = () => {
        setValuesArray([])
    }

    useEffect(() => {
        getData();
    }, [])


    const handleClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
            const valor = currentTarget.value;
            addValue(valor);
            dispatch(setValuesAction(valuesArray.join(' ')));
        }

    return (
        <div className="w-full h-full absolute grid grid-cols-4 gap-1 grid-flow-row ">
            { values.map((el: valueInterface) => {
                return <Button handleClick = {handleClick} button = { el.value } key = { el.key } />
            })}
        </div>
    )
}
