import { useState, useEffect, useCallback } from 'react';

// Simple oscillator-based sound synthesizer to avoid external assets for now
// This ensures sounds work immediately without needing to download files
export const useDigitalSound = () => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    useEffect(() => {
        // Initialize AudioContext on user interaction if needed, or just set it up
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(ctx);
        return () => {
            if (ctx.state !== 'closed') {
                ctx.close();
            }
        };
    }, []);

    const playHover = useCallback(() => {
        if (!audioContext) return;
        if (audioContext.state === 'suspended') audioContext.resume();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // High pitch "blip" for hover
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }, [audioContext]);

    const playClick = useCallback(() => {
        if (!audioContext) return;
        if (audioContext.state === 'suspended') audioContext.resume();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Lower pitch "click" for action
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }, [audioContext]);

    // Typing sound effect for loading screen or text appearance
    const playTyping = useCallback(() => {
        if (!audioContext) return;
        if (audioContext.state === 'suspended') audioContext.resume();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(1200 + Math.random() * 200, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.03);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.03);
    }, [audioContext]);

    return { playHover, playClick, playTyping };
};
