interface TypographyProps {
    children: React.ReactNode
    className?: string
    clickable?: boolean
}

export const Heading = ({ children, className, clickable }: TypographyProps) => {
    return (
        <h1
            className={`
                text-4xl 
                my-2 
                text-white 
                transition-colors 
                duration-300 
                ${className} 
                ${clickable ? 'hover:text-accent' : ''}
            `}>
            {children}
        </h1>
    )
}

export const Paragraph = ({ children, className, clickable }: TypographyProps) => {
    return (
        <p
            className={`
                text-base 
                my-1 
                text-white
                transition-colors 
                duration-300 
                ${className} 
                ${clickable ? 'hover:text-accent' : ''}
            `}>
            {children}
        </p>
    )
}