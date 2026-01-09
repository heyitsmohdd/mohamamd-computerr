import { useWindowManager } from '../context/useWindowManager';
import WindowFrame from './WindowFrame';
import styles from '../styles/Desktop.module.css';

const Desktop = () => {
    const { windows } = useWindowManager();

    return (
        <div className={styles.desktop}>
            <div className={styles.windowsContainer}>
                {windows
                    .filter((win) => win.isOpen)
                    .map((win) => (
                        <WindowFrame
                            key={win.id}
                            id={win.id}
                            title={win.title}
                            zIndex={win.zIndex}
                            isMinimized={win.isMinimized}
                        >
                            <win.contentComponent />
                        </WindowFrame>
                    ))}
            </div>
        </div>
    );
};

export default Desktop;
