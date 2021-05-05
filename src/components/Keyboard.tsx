import { useEffect, useState } from "react";
import { Button } from "./Button"

interface valueInterface {
    value: string;
    key: string
}

export const Keyboard = () => {
    const [values, setValues] = useState([]);

    const getData = async () => {
        try {
            const data = await fetch("https://api.jsonbin.io/b/60921cfdd64cd16802aab207/1");
            const res = await data.json();
            setValues(res.botones)
        } catch (err) {
            console.log("ERROR: ", err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className = "w-20 flex flex-row flex-wrap">
            { values.map((el: valueInterface) => {
                return <Button button = { el.value } key = { el.key } />
            })}
        </div>
    )
}
