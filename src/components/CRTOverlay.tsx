import { useState, type FC } from 'react';
import '../styles/RetroEffects.css';

interface CRTOverlayProps {
    isVisible: boolean;
    onToggle: () => void;
}

const CRTOverlay: FC<CRTOverlayProps> = ({ isVisible, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {isVisible && (
                <>
                    <div className="crt-scanlines" />
                    <div className="crt-glow" />
                    <div className="crt-vignette" />
                    <div className="crt-interlace" />
                </>
            )}

            {/* CRT Toggle Button - Win98 style */}
            <button
                onClick={onToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onToggle();
                    }
                }}
                tabIndex={0}
                aria-label={isVisible ? 'Disable CRT effects' : 'Enable CRT effects'}
                aria-pressed={isVisible}
                style={{
                    position: 'fixed',
                    bottom: '50px',
                    right: '10px',
                    zIndex: 10000,
                    padding: '4px 8px',
                    fontFamily: "'VT323', monospace",
                    fontSize: '14px',
                    backgroundColor: isHovered ? '#dfdfdf' : '#c0c0c0',
                    border: '2px solid',
                    borderColor: isHovered ? '#808080 #ffffff #ffffff #808080' : '#ffffff #808080 #808080 #ffffff',
                    boxShadow: isHovered ? 'inset 1px 1px 0 #808080' : 'inset -1px -1px 0 #808080',
                    cursor: 'pointer',
                    color: '#000000',
                    outline: 'none',
                }}
            >
                {isVisible ? '📺 CRT: ON' : '📺 CRT: OFF'}
            </button>
        </>
    );
};

export default CRTOverlay;
