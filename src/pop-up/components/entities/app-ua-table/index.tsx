import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import useGetUserAgentsList from '@/pop-up/hooks/use-get-ua-list';

export function AppUaTable() {
  const { uaList, isLoading } = useGetUserAgentsList();
  if (isLoading) {
    return <AppSpinner />;
  }

  return <AppDataTable data={uaList} />;
}
