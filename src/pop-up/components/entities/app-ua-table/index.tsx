import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import useGetUserAgentsList from '@/pop-up/hooks/use-get-ua-list';

export function AppUaTable() {
  const { userAgents, isLoading } = useGetUserAgentsList();
  if (isLoading) {
    return <AppSpinner />;
  }

  return <AppDataTable data={userAgents} />;
}
