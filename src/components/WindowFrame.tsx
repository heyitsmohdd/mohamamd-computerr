import type { ReactNode } from 'react';
import { useRef, useMemo } from 'react';
import Draggable from 'react-draggable';
import { useWindowManager } from '../context/useWindowManager';
import type { AppId } from '../types/window.types';
import styles from '../styles/WindowFrame.module.css';

interface WindowFrameProps {
    id: AppId;
    title: string;
    children: ReactNode;
    zIndex: number;
    isMinimized: boolean;
}

const WindowFrame = ({ id, title, children, zIndex, isMinimized }: WindowFrameProps) => {
    const { closeWindow, minimizeWindow, focusWindow } = useWindowManager();
    const nodeRef = useRef<HTMLDivElement>(null);

    const windowState = useMemo(() => {
        if (typeof window === 'undefined') {
            return { isMobile: false, defaultPos: { x: 0, y: 0 } };
        }

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const mobile = screenWidth < 768;

        if (mobile) {
            return {
                isMobile: mobile,
                defaultPos: { x: Math.round(screenWidth * 0.025), y: 10 }
            };
        }

        const windowWidth = 600;
        const windowHeight = 500;
        const x = (screenWidth - windowWidth) / 2;
        const y = (screenHeight - windowHeight) / 2 - 20;

        return {
            isMobile: mobile,
            defaultPos: { x: Math.max(0, x), y: Math.max(0, y) }
        };
    }, []);

    const { isMobile, defaultPos } = windowState;

    const handleMouseDown = () => {
        focusWindow(id);
    };

    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    if (isMinimized) return null;

    return (
        <Draggable
            handle=".window-title-bar"
            defaultPosition={defaultPos}
            bounds="parent"
            nodeRef={nodeRef}
            disabled={isMobile}
        >
            <div
                ref={nodeRef}
                className={styles.window}
                style={{
                    zIndex,
                    width: isMobile ? '95vw' : '600px',
                    height: isMobile ? '85vh' : '500px',
                    minWidth: 'unset',
                    minHeight: 'unset',
                    maxWidth: 'unset',
                    left: isMobile ? '2.5vw' : 'auto',
                    top: isMobile ? '10px' : 'auto',
                    position: isMobile ? 'fixed' : 'absolute'
                }}
                onMouseDown={handleMouseDown}
            >
                <div className={`${styles.titleBar} window-title-bar`}>
                    <div className={styles.titleText}>{title}</div>
                    <div className={styles.controlButtons}>
                        <button
                            className={`${styles.controlButton} ${styles.minimizeButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                minimizeWindow(id);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, () => minimizeWindow(id))}
                            title="Minimize"
                            tabIndex={0}
                            aria-label="Minimize window"
                        >
                            _
                        </button>
                        <button
                            className={`${styles.controlButton} ${styles.closeButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                closeWindow(id);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, () => closeWindow(id))}
                            title="Close"
                            tabIndex={0}
                            aria-label="Close window"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default WindowFrame;
