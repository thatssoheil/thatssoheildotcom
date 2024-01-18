interface ButtonProps {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button
            className={`
                ${className} 
                w-full h-9
                border border-white rounded 
                flex justify-center items-center
                bg-transparent text-white font-medium
                hover:bg-white hover:text-black
                transition duration-300 ease-in-out
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button