interface Props {
    expression: String,
    result: any,
    deleteSelf: any
}

export const Item = (props: Props) => {

    const { expression, result, deleteSelf } = props; 

    return (
        <div className = "w-full h-30 mt-6 bg-gray-300 flex justify-center relative items-center rounded dark:text-white dark:bg-gray-600">
            <div id = "item" className = "p-5 w-full h-full flex flex-row">
                <div className="flex flex-col">
                    <h1 className = "opacity-80 ml-5">{expression}</h1>
                    <p className = "text-3xl mt-5 ml-5">{result}</p>
                </div>
                <i 
                    className = "fas fa-trash absolute right-6 dark:text-white cursor-pointer hover:opacity-75"
                    onClick = {deleteSelf}
                ></i>
            </div>
        </div>
    )
}