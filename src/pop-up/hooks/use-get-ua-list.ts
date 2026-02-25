import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import { $uaList, $uaListLoading, getUserAgentsFx } from '@/pop-up/store';

function useGetUserAgentsList() {
  const [uaList, isLoading] = useUnit([$uaList, $uaListLoading]);

  useEffect(() => {
    getUserAgentsFx();
  }, []);

  return { uaList, isLoading };
}

export default useGetUserAgentsList;
