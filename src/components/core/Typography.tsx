interface TypographyProps {
    children: React.ReactNode
    clickable?: boolean
    className?: string
    style?: React.CSSProperties
}

export const Heading = ({ children, clickable, className, style }: TypographyProps) => {
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
            `}
            style={style}
        >
            {children}
        </h1>
    )
}

export const Paragraph = ({ children, clickable, className, style }: TypographyProps) => {
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
            `}
            style={style}
        >
            {children}
        </p>
    )
}