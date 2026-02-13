import AppUaInfo from '@entities/app-ua-info';
import { AppUaTable } from '@entities/app-ua-table';
import { useState } from 'react';

function ViewToggle() {
  const [viewState, setViewState] = useState<'info' | 'table'>('info');
  const handleChangeView = (state: 'info' | 'table') => {
    setViewState(state);
  };

  return viewState === 'info' ? <AppUaInfo buttonCallback={() => handleChangeView('table')} /> : <AppUaTable />;
}

export default ViewToggle;
