import { useSelector } from 'react-redux';

interface RootState {
    value : any;
}

export const Screen = () => {
    
    const { currentValue } = useSelector((state: RootState)  => state.value)

    return (
        <div className="w-full p-10 h-full rounded text-right text-5xl font-semibold">
            <h3> { currentValue } </h3>
        </div>
    )
}
