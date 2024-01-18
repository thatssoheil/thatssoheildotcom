interface VDividerProps {
    className?: string
}

const VDivider = ({ className }: VDividerProps) => {
    return (
        <div className={`${className} w-0 h-4 border-l mx-2 border-white`} />
    )
}

export default VDivider