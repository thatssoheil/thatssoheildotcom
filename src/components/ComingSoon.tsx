interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const ComingSoon = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
            <h1 className='text-4xl mb-4'>Coming Soon</h1>
        </div>
    )
}

export default ComingSoon;