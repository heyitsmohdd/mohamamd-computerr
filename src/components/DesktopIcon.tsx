import { useState, type FC } from 'react';
import { useWindowManager } from '../context/useWindowManager';
import type { AppId } from '../types/window.types';
import styles from '../styles/DesktopIcon.module.css';

interface DesktopIconProps {
    id: AppId;
    title: string;
    iconUrl: string;
}

const DesktopIcon: FC<DesktopIconProps> = ({ id, title, iconUrl }) => {
    const { openWindow } = useWindowManager();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleDoubleClick = () => {
        openWindow(id);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openWindow(id);
        }
    };

    return (
        <div
            className={styles.iconContainer}
            onDoubleClick={handleDoubleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`Open ${title}`}
        >
            {isLoading && !hasError && (
                <div className={styles.iconPlaceholder} aria-hidden="true">
                    📁
                </div>
            )}
            <img
                src={iconUrl}
                alt={title}
                className={styles.icon}
                draggable={false}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
            {hasError && (
                <div className={styles.iconPlaceholder} aria-hidden="true">
                    📁
                </div>
            )}
            <div className={`${styles.label} desktop-icon-text`}>{title}</div>
        </div>
    );
};

export default DesktopIcon;
