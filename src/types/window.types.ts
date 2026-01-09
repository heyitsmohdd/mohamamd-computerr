import type { FC } from 'react';

export type AppId = 'portal' | 'bio' | 'projects' | 'skills' | 'contact';

export interface WindowConfig {
    id: AppId;
    title: string;
    contentComponent: FC;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

export interface WindowManagerContextType {
    windows: WindowConfig[];
    activeWindowId: AppId | null;
    openWindow: (id: AppId) => void;
    closeWindow: (id: AppId) => void;
    minimizeWindow: (id: AppId) => void;
    focusWindow: (id: AppId) => void;
}
