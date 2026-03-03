'use client';

import React, { useEffect, useRef } from 'react';

export default function DataFlowBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true }); // Standard context
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let time = 0;

        // Configuration
        const lines = 24;
        const speed = 0.001; // Reverted to 0.001 (from 0.0005)

        const draw = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            // OPTIMIZATION: Use 'screen' blending ONLY.
            // REMOVED 'shadowBlur' which causes severe frame drops.
            ctx.globalCompositeOperation = 'screen';

            // Batch drawing could be even faster, but removing shadowBlur is the key win.

            for (let i = 0; i < lines; i++) {
                ctx.beginPath();

                const yOffset = height * 0.5;
                const amplitude = height * 0.08;
                const frequency = 0.001;
                const phase = time + i * 0.1;

                // Color Logic
                let hue;
                if (i % 6 === 0) {
                    hue = 25 + Math.sin(time * 0.5 + i) * 15; // Warm Accents
                } else {
                    hue = 220 + Math.sin(time * 0.1 + i * 0.2) * 50; // Cool Base
                }

                // Slightly increased base alpha to compensate for lack of shadowBlur
                const alpha = 0.4 + Math.sin(time * 0.3 + i) * 0.2;

                ctx.strokeStyle = `hsla(${hue}, 85%, 60%, ${alpha})`;
                ctx.lineWidth = 2; // Keep crisp

                ctx.shadowBlur = 15; // Added Glow Effect
                ctx.shadowColor = ctx.strokeStyle;

                for (let x = 0; x < width; x += 10) { // OPTIMIZATION: Step 10 instead of 5 reduces draw calls by 50%
                    // Interpolation handles the gaps visually fine for waves
                    const y = yOffset
                        + Math.sin(x * frequency + phase) * amplitude
                        + Math.sin(x * frequency * 1.5 - phase * 0.5) * (amplitude * 0.4)
                        + (i - lines / 2) * 3;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                ctx.stroke();
            }

            ctx.globalCompositeOperation = 'source-over';

            // Glow Beam (Gradient) is cheap to render
            const gradient = ctx.createLinearGradient(0, height / 2, width, height / 2);
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(0.2, 'rgba(6, 182, 212, 0.03)');
            gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
            gradient.addColorStop(0.8, 'rgba(234, 88, 12, 0.02)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, height / 2 - 100, width, 200);

            time += speed * 25;
            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#1a237e]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#1a237e_100%)] z-10 pointer-events-none mix-blend-multiply"></div>
            <canvas ref={canvasRef} className="absolute inset-0 opacity-100 mix-blend-screen" />
        </div>
    );
}
