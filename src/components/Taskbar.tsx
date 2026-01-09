import { useState, useEffect } from 'react';
import { useWindowManager } from '../context/useWindowManager';
import StartMenu from './StartMenu';
import styles from '../styles/Taskbar.module.css';

const Taskbar = () => {
    const { windows, activeWindowId, focusWindow } = useWindowManager();
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    const openWindows = windows.filter((win) => win.isOpen);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <>
            <StartMenu isOpen={isStartMenuOpen} onClose={() => setIsStartMenuOpen(false)} />

            <div className={styles.taskbar}>
                <button
                    className={`${styles.startButton} ${isStartMenuOpen ? styles.startButtonActive : ''}`}
                    onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
                >
                    <span>🪟</span>
                    Start
                </button>

                <div className={styles.windowButtons}>
                    {openWindows.map((win) => (
                        <button
                            key={win.id}
                            className={`${styles.windowButton} ${activeWindowId === win.id ? styles.windowButtonActive : ''}`}
                            onClick={() => focusWindow(win.id)}
                        >
                            {win.title}
                        </button>
                    ))}
                </div>

                <div className={`${styles.clock} taskbar-clock`}>
                    {formatTime(currentTime)}
                </div>
            </div>
        </>
    );
};

export default Taskbar;

