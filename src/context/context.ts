import { createContext } from 'react';
import type { WindowManagerContextType } from '../types/window.types';

export const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);
