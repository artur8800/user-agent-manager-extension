import AddUserAgent from '@features/add-user-agent';
import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import useGetUserAgentsList from '@/pop-up/hooks/use-get-ua-list';

export function AppUaTable({
  renderTopBlock,
  renderBottomBlock,
}: {
  renderTopBlock?: () => React.ReactNode;
  renderBottomBlock?: () => React.ReactNode;
}) {
  const { uaList, isLoading } = useGetUserAgentsList();

  if (isLoading) {
    return <AppSpinner />;
  }

  return (
    <div className="w-full h-full">
      {typeof renderTopBlock === 'function' && renderTopBlock()}

      <AppDataTable data={uaList} />

      {typeof renderBottomBlock === 'function' && renderBottomBlock()}
      <AddUserAgent />
    </div>
  );
}
