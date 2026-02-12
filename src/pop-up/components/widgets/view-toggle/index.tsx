import AppUaInfo from '@/pop-up/components/features/app-ua-info';
import { useState } from 'react';

function ViewToggle() {
  const [viewState, setViewState] = useState<'info' | 'table'>('info');

  return viewState === 'info' ? <AppUaInfo buttonCallback={() => setViewState('table')} /> : <div />;
}

export default ViewToggle;
