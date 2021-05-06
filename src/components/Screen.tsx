import { useSelector } from 'react-redux';

interface RootState {
    value : any;
}

export const Screen = () => {
    
    const { currentValue } = useSelector((state: RootState)  => state.value)
    console.log(typeof(currentValue))

    return (
        <div className="w-full h-full rounded">
            <h3> {  } </h3>
        </div>
    )
}
