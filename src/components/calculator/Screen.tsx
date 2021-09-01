import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';

export const Screen = () => {

    var { currentValue } = useSelector((state: RootState)  => state.value);

    return (
        <div className="w-full p-10 pr-5 h-full max-h-xs rounded dark:text-white text-right text-5xl font-semibold">
             { currentValue? currentValue : "0"}
             {/* { currentValue === "Syntax error" && 
             <h2 className = "dark:text-white absolute pr-5 right-0 bottom-20 text-xs">
                Presione cualquier tecla para resetear
             </h2> } */}
        </div>
        
    )
}
