import type { FC } from 'react';
import { Power } from 'lucide-react';
import { contact } from '../data/content';

interface StartMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const StartMenu: FC<StartMenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleShutdown = () => {
        window.location.reload();
    };

    return (
        <>
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
            />

            <div className="fixed bottom-12 left-0 z-50 w-64 bg-[#c0c0c0] win95-border">
                <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white p-3">
                    <div className="font-bold pixel-font-large text-lg">Web OS</div>
                    <div className="text-xs opacity-90">v1.0 Alpha</div>
                </div>

                <div className="p-2 space-y-1">
                    <div className="text-xs font-bold px-2 py-1 text-gray-700 pixel-font-large">Connect</div>

                    {contact.socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-2 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer pixel-font-large"
                            onClick={onClose}
                        >
                            <span className="text-lg">{social.icon}</span>
                            <span className="text-sm">{social.platform}</span>
                        </a>
                    ))}

                    <div className="h-[2px] bg-[#808080] my-2 shadow-[0_1px_0_#ffffff]" />

                    <button
                        onClick={handleShutdown}
                        className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-600 hover:text-white transition-colors cursor-pointer text-left pixel-font-large"
                    >
                        <Power size={18} />
                        <span className="text-sm font-bold">Shut Down</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default StartMenu;
