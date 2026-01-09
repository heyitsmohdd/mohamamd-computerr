import { useState } from 'react';
import type { ReactNode, FC } from 'react';
import type { WindowConfig, AppId } from '../types/window.types';
import { WindowManagerContext } from './context';
import BioApp from '../components/apps/BioApp';
import ProjectsApp from '../components/apps/ProjectsApp';
import SkillsApp from '../components/apps/SkillsApp';
import ContactApp from '../components/apps/ContactApp';
import ComputerPortal from '../components/apps/ComputerPortal';

const initialWindows: WindowConfig[] = [
    {
        id: 'portal',
        title: 'mohammad.computer',
        contentComponent: ComputerPortal,
        isOpen: true,
        isMinimized: false,
        zIndex: 1,
    },
    {
        id: 'bio',
        title: 'About Me',
        contentComponent: BioApp,
        isOpen: false,
        isMinimized: false,
        zIndex: 1,
    },
    {
        id: 'projects',
        title: 'My Projects',
        contentComponent: ProjectsApp,
        isOpen: false,
        isMinimized: false,
        zIndex: 1,
    },
    {
        id: 'skills',
        title: 'Skills',
        contentComponent: SkillsApp,
        isOpen: false,
        isMinimized: false,
        zIndex: 1,
    },
    {
        id: 'contact',
        title: 'Contact',
        contentComponent: ContactApp,
        isOpen: false,
        isMinimized: false,
        zIndex: 1,
    },
];

export const WindowManagerProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [windows, setWindows] = useState<WindowConfig[]>(initialWindows);
    const [activeWindowId, setActiveWindowId] = useState<AppId | null>('portal');
    const [maxZIndex, setMaxZIndex] = useState(2);

    const openWindow = (id: AppId) => {
        const newZIndex = maxZIndex + 1;
        setMaxZIndex(newZIndex);
        setActiveWindowId(id);

        setWindows((prev) =>
            prev.map((win) =>
                win.id === id
                    ? { ...win, isOpen: true, isMinimized: false, zIndex: newZIndex }
                    : win
            )
        );
    };

    const closeWindow = (id: AppId) => {
        if (id === 'portal') return;

        setWindows((prev) =>
            prev.map((win) => (win.id === id ? { ...win, isOpen: false, isMinimized: false } : win))
        );

        if (activeWindowId === id) {
            setActiveWindowId('portal');
        }
    };

    const minimizeWindow = (id: AppId) => {
        setWindows((prev) =>
            prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
        );

        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const focusWindow = (id: AppId) => {
        const newZIndex = maxZIndex + 1;
        setMaxZIndex(newZIndex);
        setActiveWindowId(id);

        setWindows((prev) =>
            prev.map((win) =>
                win.id === id ? { ...win, zIndex: newZIndex, isMinimized: false } : win
            )
        );
    };

    return (
        <WindowManagerContext.Provider
            value={{ windows, activeWindowId, openWindow, closeWindow, minimizeWindow, focusWindow }}
        >
            {children}
        </WindowManagerContext.Provider>
    );
};
