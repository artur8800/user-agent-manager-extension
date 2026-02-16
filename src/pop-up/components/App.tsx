import logo from '@/assets/logo.svg';

import AppBar from './ui/molecules/app-bar';
import ViewToggle from './widgets/view-toggle';

function App() {
  return (
    <div className="bg-secondary w-screen-700 min-h-screen-min max-h-screen-max relative">
      <AppBar logo={logo} />
      <ViewToggle />
    </div>
  );
}

export default App;
