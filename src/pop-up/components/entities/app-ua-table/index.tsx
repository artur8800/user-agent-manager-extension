import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import useGetUserAgentsList from '@/pop-up/hooks/use-get-ua-list';

export function AppUaTable() {
  const { uaList, isLoading } = useGetUserAgentsList();
  if (isLoading) {
    return <AppSpinner />;
  }

  return (
    <div className="w-full h-full">
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold">Select User-Agent from list</h2>
      </div>

      <AppDataTable data={uaList} />
    </div>
  );
}
