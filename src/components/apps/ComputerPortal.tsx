import { portalIcons } from '../../data/content';
import { useWindowManager } from '../../context/useWindowManager';
import type { AppId } from '../../types/window.types';

const ComputerPortal = () => {
    const { openWindow } = useWindowManager();

    const handleIconClick = (id: string) => {
        if (['bio', 'projects', 'skills', 'contact'].includes(id)) {
            openWindow(id as AppId);
        }
    };

    const iconDisplay: Record<string, { emoji: string; url: string }> = {
        'bio': { emoji: '👤', url: portalIcons[0]?.iconUrl || '' },
        'projects': { emoji: '📁', url: '' },
        'skills': { emoji: '📝', url: portalIcons[2]?.iconUrl || '' },
        'contact': { emoji: '✉️', url: portalIcons[3]?.iconUrl || '' }
    };

    return (
        <div className="h-full bg-[#c0c0c0]">
            <div className="grid grid-cols-4 gap-4 gap-y-6 p-6 justify-items-center">
                {portalIcons.map((icon) => {
                    const display = iconDisplay[icon.id] || { emoji: '📄', url: icon.iconUrl };

                    return (
                        <div
                            key={icon.id}
                            onClick={() => handleIconClick(icon.id)}
                            className="flex flex-col items-center justify-start w-20 sm:w-24 group cursor-pointer p-2 bg-[#c0c0c0] hover:bg-[#d4d0c8] active:bg-[#a0a0a0] transition-colors rounded-sm"
                            style={{
                                boxShadow: 'inset 1px 1px #dfdfdf, inset -1px -1px #808080'
                            }}
                            title={icon.description}
                        >
                            <div className="w-12 h-12 mb-2 flex items-center justify-center bg-white flex-shrink-0"
                                style={{
                                    boxShadow: 'inset -1px -1px #ffffff, inset 1px 1px #808080'
                                }}
                            >
                                {icon.id === 'projects' || !display.url ? (
                                    <span className="text-4xl leading-none">{display.emoji}</span>
                                ) : (
                                    <img
                                        src={display.url}
                                        alt={icon.label}
                                        className="w-full h-full object-contain"
                                        style={{ imageRendering: 'pixelated' }}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl leading-none">${display.emoji}</span>`;
                                        }}
                                    />
                                )}
                            </div>

                            <span className="text-center text-xs sm:text-sm leading-tight break-words w-full px-1 font-bold text-black pixel-font-large">
                                {icon.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ComputerPortal;
