import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

export const Screen = () => {
    
    const { currentValue } = useSelector((state: RootState)  => state.value)

    return (
        <div className="w-full p-10 pl-0 h-full max-h-xs rounded dark:text-white text-right text-5xl font-semibold">
             { currentValue }
        </div>
    )
}
