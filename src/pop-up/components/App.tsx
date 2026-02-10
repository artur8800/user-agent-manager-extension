'use client';

import './App.css';
import AppBar from './ui/molecules/app-bar';
import logo from '@/assets/logo.svg';

function App() {
  return (
    <div className="bg-secondary w-screen-400 min-h-screen-min max-h-screen-max relative">
      <AppBar logo={logo} />
    </div>
  );
}

export default App;
