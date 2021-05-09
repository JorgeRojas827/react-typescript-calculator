import { setValuesAction } from '../redux/values/values.actions';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Root.scss'

export const Button = (values?: any) => {

    const [valuesArray, setValuesArray] = useState([] as Array<string>);

    const dispatch = useDispatch();

    const addValue = (newValue: string) => {
        setValuesArray([ ...valuesArray, newValue]);
    }

    const handleClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
        const valor = currentTarget.value;
        addValue(valor);
        dispatch(setValuesAction(valuesArray.join(' ')));
        console.log("IDA: ", valuesArray)
    }

    const { button } = values;

    return (
        <>
            <input
             type = "button"
             onClick = { handleClick }
             value = { button }
             className="border-gray-300 rounded transition duration-150 shadow hover:bg-gray-300 border-2 cursor-pointer text-lg bg-gray-100 text-black w-full h-full
             dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-500
             " />
        </>
    )
}
