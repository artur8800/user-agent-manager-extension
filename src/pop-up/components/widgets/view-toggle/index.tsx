import { useState } from 'react';

import AppUaInfo from '@/pop-up/components/entities/app-ua-info';

import { AppUaTable } from '../../entities/app-ua-table';

function ViewToggle() {
  const [viewState, setViewState] = useState<'info' | 'table'>('info');
  const handleChangeView = (state: 'info' | 'table') => {
    setViewState(state);
  };

  return viewState === 'info' ? <AppUaInfo buttonCallback={() => handleChangeView('table')} /> : <AppUaTable />;
}

export default ViewToggle;
