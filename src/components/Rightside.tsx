import { expressionsArray } from './Keyboard'
import { Item } from "./Item"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

export const Rightside = () => {
    var expressions = expressionsArray;
    const { currentExpression } = useSelector((state: RootState) => state.expression)
    const clearRecords = () => {
        expressions = []
    }

    const deleteSelf = (position: any) => {
        expressions.splice(position, 1)
        console.log(expressions)
    }
    
    return (
        <div className = "h-full w-full container flex flex-col relative p-12 pt-8">
            <h2 className = "text-center mb-5 dark:text-white text-3xl font-bold">Records</h2>
            <hr className = "border-black dark:border-gray-400" />
            {expressions.length >= 1 ? expressions.map((e, i) => {
                return <Item key = {i} expression = {e.exp} deleteSelf = {() => deleteSelf(i)} result = {e.result}/>
            }): <h3 className = "dark:text-white pt-5 text-xl text-center">No records yet</h3>}
            <button id = "delete" onClick = {clearRecords} className="w-36 h-12 self-center absolute bottom-6 dark:text-white rounded">Delete records</button>
        </div>
    )
}
