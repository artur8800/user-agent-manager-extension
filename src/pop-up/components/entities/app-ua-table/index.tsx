import { useEffect, useState } from 'react';
import AppDataTable from '@ui/molecules/app-data-table';
import AppSpinner from '@ui/molecules/app-spinner';

import { AppMessageSender } from '@/lib/messages';

export function AppUaTable() {
  const [isLoading] = useState(true);

  useEffect(() => {
    const AppMessageSenderInstance = new AppMessageSender();

    AppMessageSenderInstance.sendMessage('GET_USER_AGENTS')
      .then((response) => {
        console.log('Received user agent list:', JSON.stringify(response));
      })
      .catch((error) => {
        console.error('Error fetching user agents:', error);
      });
  }, []);

  if (isLoading) {
    return <AppSpinner />;
  }

  return <AppDataTable />;
}
