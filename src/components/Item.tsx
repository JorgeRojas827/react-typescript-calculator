
export const Item = (operation: String, result: number) => {

    return (
        <div className = "w-full h-30 mt-8 flex justify-center relative items-center rounded dark:text-white bg-gray-600">
            <div className = "p-5 w-full h-full flex flex-row">
                <div className="flex flex-col">
                    <h1 className = "opacity-80 ml-5">{operation}</h1>
                    <p className = "text-3xl mt-5 ml-5">{result}</p>
                </div>
                <i 
                    className = "fas fa-trash absolute right-6 text-white cursor-pointer hover:opacity-75"
                ></i>
            </div>
        </div>
    )
}