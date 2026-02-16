import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import useUserAgentsList from '@/pop-up/hooks/useUaList';

export function AppUaTable() {
  const { userAgents, isLoading } = useUserAgentsList();
  if (isLoading) {
    return <AppSpinner />;
  }

  return <AppDataTable data={userAgents} />;
}
