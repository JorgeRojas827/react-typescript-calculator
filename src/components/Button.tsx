
export const Button = (value?: any) => {

    const { button } = value;

    const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
        console.log(e.currentTarget.value);
    }

    return (
        <div>
            <input
             type = "button"
             onClick = {handleClick}
             value = { button }
             className="rounded-full cursor-pointer shadow-sm bg-blue-600 text-white px-5 py-3" />
        </div>
    )
}
