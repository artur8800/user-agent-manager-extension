import { useUnit } from 'effector-react';

import AppUaInfo from '@entities/app-ua-info';
import { AppUaTable } from '@entities/app-ua-table';
import AppTableHeading from '@ui/molecules/app-table-heading';

import { $appView, toggleView } from './model';

function ViewToggle() {
  const [viewState, onToggleView] = useUnit([$appView, toggleView]);

  return viewState === 'main' ? (
    <AppUaInfo buttonCallback={onToggleView} />
  ) : (
    <AppUaTable
      renderTopBlock={() => <AppTableHeading headingText="Select User-Agent from table" />}
      renderBottomBlock={() => <AppTableHeading headingText="Add custom User-Agent" />}
    />
  );
}

export default ViewToggle;
