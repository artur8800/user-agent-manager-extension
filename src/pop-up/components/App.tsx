import logo from '@/assets/logo.svg';

import { TooltipProvider } from './ui/atoms/tooltip';
import AppBar from './ui/molecules/app-bar';
import ViewToggle from './widgets/view-toggle';

function App() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="bg-secondary w-screen-700 min-h-screen-min max-h-screen-max relative">
        <AppBar logo={logo} />
        <ViewToggle />
      </div>
    </TooltipProvider>
  );
}

export default App;
