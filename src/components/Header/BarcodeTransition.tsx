'use client'

import { useEffect, useState } from 'react';

const BarcodeTransition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <h1
                style={{
                    fontFamily: 'LibreBarcode39',
                    opacity: scrollPosition > 200 ? 0 : 1,
                    transition: 'opacity 1s'
                }}
                className={'text-white text-5xl text-center absolute top-7'}>
                THATSSOHEIL
            </h1>
            <h1
                style={{
                    fontFamily: 'LibreBarcode39Text',
                    opacity: scrollPosition > 200 ? 1 : 0,
                    transition: 'opacity 1s'
                }}
                className={'text-white text-5xl text-center absolute top-7'}>
                THATSSOHEIL
            </h1>
        </div>
    )
}

export default BarcodeTransition