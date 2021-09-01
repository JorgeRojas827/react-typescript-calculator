import '../Root.css'

export const Button = (values?: any) => {

    const { button, handleClick } = values;

    return (
        <>
            <input
             type = "button"
             value = { button }
             onClick = { handleClick }
             className="border-gray-300 font-semibold input rounded transition duration-150 shadow hover:bg-gray-300 border-2 cursor-pointer text-lg md:text-xl bg-gray-100 text-black w-full h-full
             dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-500
             " />
        </>
    )
}
