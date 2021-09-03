import { Button } from "./Button";
import { useCalculator } from '../../hooks/useCalculator';

interface valueInterface {
    value: string;
    key: string
}

export const Keyboard = () => {
    
    const { buttonValues, calculateExpression, deleteLastItem, clearArray, handleClick } = useCalculator();

    return (
        <div className="w-full h-full absolute grid grid-cols-4 gap-1 grid-flow-row ">
            { buttonValues.map((el: valueInterface) => {
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
