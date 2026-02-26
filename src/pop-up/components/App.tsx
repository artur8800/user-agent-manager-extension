import { TooltipProvider } from './ui/atoms/tooltip';
import AppBar from './ui/molecules/app-bar';
import ViewToggle from './widgets/view-toggle';

import logo from '@/assets/logo.svg';
import { Toaster } from '@/pop-up/components/ui/atoms/sonner';

function App() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="bg-secondary w-screen-700 min-h-screen-min max-h-screen-max relative">
        <AppBar logo={logo} />
        <ViewToggle />
      </div>
      <Toaster duration={2000} />
    </TooltipProvider>
  );
}

export default App;
