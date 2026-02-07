import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import logo from '../../assets/logo.png';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Slight delay at 100%
                    return 100;
                }
                // Randomize progress increment for "cyber" feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-[#030712] flex flex-col items-center justify-center font-mono overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Animation */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Pulsing Glow behind logo */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl"
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* The Logo Image */}
                    <motion.img
                        src={logo}
                        alt="Loading Logo"
                        className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        animate={{
                            y: [0, -10, 0],
                            filter: [
                                "brightness(0) invert(1) drop-shadow(0 0 0px rgba(6,182,212,0))",
                                "brightness(0) invert(1) drop-shadow(0 0 10px rgba(6,182,212,0.8))",
                                "brightness(0) invert(1) drop-shadow(0 0 0px rgba(6,182,212,0))"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Text Glitch Effect */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-widest mb-6 relative">
                    <span className="relative z-10">MS SOLUTIONS</span>
                    <motion.span
                        className="absolute top-0 left-0 -ml-1 text-cyan-500 opacity-70 mix-blend-screen"
                        animate={{ x: [-2, 2, -1, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        MS SOLUTIONS
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 ml-1 text-purple-600 opacity-70 mix-blend-screen"
                        animate={{ x: [2, -2, 1, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
                    >
                        MS SOLUTIONS
                    </motion.span>
                </h1>

                {/* Loading Bar */}
                <div className="w-80 max-w-[90vw] h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800 relative">
                    {/* Moving sheen */}
                    <motion.div
                        className="absolute top-0 bottom-0 width-[20px] bg-white opacity-20 z-20 skew-x-[-20deg]"
                        animate={{ left: ['-20%', '120%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Progress Fill */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.2 }}
                    />
                </div>

                {/* Status Text */}
                <div className="mt-4 flex justify-between w-80 max-w-[90vw] text-xs font-mono text-cyan-400">
                    <span>SYSTEM_INIT</span>
                    <span>{Math.round(progress)}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
