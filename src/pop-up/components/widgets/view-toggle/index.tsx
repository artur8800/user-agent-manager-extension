import { useState } from 'react';
import AppUaInfo from '@entities/app-ua-info';
import { AppUaTable } from '@entities/app-ua-table';
import AppTableHeading from '@ui/molecules/app-table-heading';

function ViewToggle() {
  const [viewState, setViewState] = useState<'info' | 'table'>('info');
  const handleChangeView = (state: 'info' | 'table') => {
    setViewState(state);
  };

  return viewState === 'info' ? (
    <AppUaInfo buttonCallback={() => handleChangeView('table')} />
  ) : (
    <AppUaTable
      renderTopBlock={() => <AppTableHeading headingText="Select User-Agent from table" />}
      renderBottomBlock={() => <AppTableHeading headingText="Add custom User-Agent" />}
    />
  );
}

export default ViewToggle;
