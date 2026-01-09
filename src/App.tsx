import { useState } from 'react';
import { WindowManagerProvider } from './context/WindowManagerContext';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import CRTOverlay from './components/CRTOverlay';

function App() {
  const [showCRT, setShowCRT] = useState(true);

  return (
    <WindowManagerProvider>
      <Desktop />
      <Taskbar />
      <CRTOverlay isVisible={showCRT} onToggle={() => setShowCRT(!showCRT)} />
    </WindowManagerProvider>
  );
}

export default App;
