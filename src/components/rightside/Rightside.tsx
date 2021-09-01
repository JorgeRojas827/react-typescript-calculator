import { Item } from "./Item"
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { useState } from 'react';
import { useCalculator } from '../../hooks/useCalculator';

export const Rightside = () => {
    const { expressionsArray } = useCalculator();
    var [expressions, setExpressions] = useState([]) as Array<any>
    expressions = expressionsArray;
    useSelector((state: RootState) => state.expression) as Array<Object>;

    const deleteSelf = (position: number) => {
        setExpressions(expressions.splice(position, 1));
    }
   
    const clearRecords = () => {
        setExpressions(expressions.splice(0, expressions.length))
    }

    return (
        <div className = "h-full w-full container flex flex-col relative p-5 md:p-20 md:pt-8">
            <h2 className = "text-center mb-5 dark:text-white text-xl md:text-3xl font-bold">Records</h2>
            <hr className = "border-black dark:border-gray-400" />
                {expressions.length >= 1? <div id = "itemContainer" className = "overflow-hidden overflow-y-scroll">
                    {expressions.map((e: any, i: number) => {
                return <Item
                     key = {i} 
                     expression = {e.exp} 
                     deleteSelf = {() => deleteSelf(expressions.indexOf(e))} 
                     result = {e.result}/>
            })}</div>: <h3 className = "dark:text-white pt-5 md:text-xl text-sm text-center">No records yet</h3>}
            <button id = "delete" onClick = {clearRecords} className="w-36 h-12 self-center absolute bottom-6 dark:text-white rounded">Delete records</button>
        </div>
    )
}
