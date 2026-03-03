"use client";

import React from 'react';

// CSS-only 3D Hero Component - No external dependencies required
export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Background Deep Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-950"></div>

            {/* Digital Grid Background - Perspective Plane */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
                    maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
                }}>
            </div>

            {/* Floating 3D Elements Container - Right Side */}
            <div className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 w-[500px] h-[500px] hidden md:flex items-center justify-center perspective-[1000px]">

                {/* Core Sphere (Glowing) */}
                <div className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                <div className="relative w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.6)] animate-bounce-slow flex items-center justify-center z-10">
                    {/* Inner Highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-6 w-12 h-6 bg-white/30 rounded-full blur-md transform -rotate-12"></div>
                </div>

                {/* Orbiting Rings (Atom/Network Effect) */}
                {/* Ring 1 */}
                <div className="absolute w-80 h-80 border border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateX(75deg)' }}>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Ring 2 */}
                <div className="absolute w-96 h-96 border border-sky-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateY(60deg) rotateX(45deg)' }}>
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-sky-300 rounded-full shadow-[0_0_10px_#7dd3fc] -translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Ring 3 */}
                <div className="absolute w-[450px] h-[450px] border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite]"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-60deg) rotateX(30deg)' }}>
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8] translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>

            {/* Floating Particles (CSS) */}
            <div className="absolute inset-0">
                <Particles />
            </div>
        </div>
    );
}

function Particles() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {[...Array(20)].map((_, i) => (
                <div key={i}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        opacity: Math.random() * 0.5 + 0.1,
                        animationDuration: `${Math.random() * 3 + 2}s`
                    }}>
                </div>
            ))}
        </>
    );
}

