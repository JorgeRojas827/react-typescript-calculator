import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button"

interface valueInterface {
    value: string;
    key: string
}

export const Keyboard = () => {
    const [values, setValues] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/1");
            setValues(res.data.botones)
        } catch (err) {
            console.log("ERROR: ", err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="w-full h-full absolute grid grid-cols-4 gap-1 grid-flow-row ">
            { values.map((el: valueInterface) => {
                return <Button button = { el.value } key = { el.key } />
            })}
        </div>
    )
}
