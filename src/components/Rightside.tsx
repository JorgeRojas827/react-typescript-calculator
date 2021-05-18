import { expressionsArray } from './Keyboard'
import { Item } from "./Item"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { useState } from 'react';

export const Rightside = () => {
    var [expressions, setExpressions] = useState([]) as Array<any>
    expressions = expressionsArray;
    const currentExpression = useSelector((state: RootState) => state.expression) as Array<Object>;
    console.log(currentExpression)

    const deleteSelf = (position: any) => {
        setExpressions(expressions.splice(position, 1));
    }
   
    const clearRecords = () => {
        setExpressions(expressions.splice(0, expressions.length))
    }

    return (
        <div className = "h-full w-full container flex flex-col relative p-20 pt-8">
            <h2 className = "text-center mb-5 dark:text-white text-3xl font-bold">Records</h2>
            <hr className = "border-black dark:border-gray-400" />
                {expressions.length >= 1? <div className = "overflow-hidden overflow-y-scroll">
                    {expressions.map((e: any, i: any) => {
                return <Item
                     key = {i} 
                     expression = {e.exp} 
                     deleteSelf = {() => deleteSelf(expressions.indexOf(e))} 
                     result = {e.result}/>
            })}</div>: <h3 className = "dark:text-white pt-5 text-xl text-center">No records yet</h3>}
            <button id = "delete" onClick = {clearRecords} className="w-36 h-12 self-center absolute bottom-6 dark:text-white rounded">Delete records</button>
        </div>
    )
}
