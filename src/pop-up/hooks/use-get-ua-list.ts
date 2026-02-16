import { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';

import { $uaList, addDefaultData } from '@/pop-up/store';
import { AppMessageSender, MESSAGE_TYPES } from '@/shared/messages';

function useGetUserAgentsList() {
  const [isLoading, setIsLoading] = useState(true);
  const uaList = useUnit($uaList);

  const onAddUserAgent = useUnit(addDefaultData);

  useEffect(() => {
    const sender = new AppMessageSender();
    let isMounted = true;
    const key = MESSAGE_TYPES.GET_USER_AGENTS;

    sender
      .sendMessage(key, undefined)
      .then((data) => {
        if (isMounted && data) {
          console.log('Received user agents:', data);
          onAddUserAgent(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user agents:', error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('DEBUG', uaList);
  }, [uaList]);

  return { isLoading, uaList };
}

export default useGetUserAgentsList;
