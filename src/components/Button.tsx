import './Button.scss'
import { setValuesAction } from '../redux/values/values.actions';
import { useDispatch } from 'react-redux';


export const Button = (values?: any) => {

    const { button } = values;

    const dispatch = useDispatch();
    const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
        console.log(e.currentTarget.value)
        console.log(typeof(e.currentTarget.value))
        dispatch(setValuesAction(e.currentTarget.value));
    }

    return (
        <>
            <input
             type = "button"
             onClick = {handleClick}
             value = { button }
             className="border-gray-300 even:bg-gray-800 rounded transition duration-150 shadow hover:bg-gray-300 border-2 cursor-pointer text-lg bg-gray-100 text-black w-full h-full" />
        </>
    )
}
