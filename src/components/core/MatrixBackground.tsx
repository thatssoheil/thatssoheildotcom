'use client'

import { ColorManager } from '@/utils/ColorManager';
import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // canvas.height = 1000;

        const binary = 'codingvisionintoexistence';
        const columns = canvas.width / 10;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++)
            drops[i] = 1;

        function draw() {
            if (!context) return;
            if (!canvas) return;

            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = ColorManager.colors.accent;
            context.font = '10px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)];

                context.fillText(text, i * 10, drops[i] * 10);

                if (drops[i] * 10 > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++;
            }
        }

        const intervalId = setInterval(draw, 55);

        return () => clearInterval(intervalId);
    }, []);

    return <canvas ref={canvasRef} className='absolute w-full h-full' style={{ zIndex: '-1' }} />;
};

export default MatrixBackground;