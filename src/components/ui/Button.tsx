import type { ButtonType } from "../../types/types"

function Button({ text, type, handler }: ButtonType) {

    const classAssigned = {
        default: '',
        primary: '',
        secondary: '',
        outline: '',
    }

    return (
        <>
            {type === 'ghost' ? (
                <button
                    type={handler ? 'button' : 'submit'}
                    onClick={handler}
                    className="relative overflow-hidden border border-[#F8F3CE] text-[#F8F3CE] hover:text-[#57564F] px-5 py-4 cursor-pointer group hover:rounded-lg transition-all duration-200 ease-in-out z-20 
      w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs"
                >
                    <span className="relative z-20 transition-colors duration-300">{text}</span>
                    <div className="absolute inset-0 bg-[#F8F3CE] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10" />
                    <div className="absolute inset-0 bg-[#f8f3ce78] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10" />
                    <div className="absolute inset-0 bg-[#f8f3ce78] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-10" />
                </button>
            ) : (
                <div className={`${classAssigned[type]}`} onClick={handler}>
                    {text}
                </div>
            )}

        </>
    )
}

export default Button