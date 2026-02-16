import { useEffect, useState } from 'react';

import { AppMessageSender, MESSAGE_TYPES } from '@/lib/messages';
import UserAgentItem from '@/types/ua';

function useGetUserAgentsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [userAgents, setUserAgents] = useState<UserAgentItem[]>([]);

  useEffect(() => {
    const sender = new AppMessageSender();
    let isMounted = true;
    const key = MESSAGE_TYPES.GET_USER_AGENTS;

    sender
      .sendMessage(key, undefined)
      .then((data) => {
        if (isMounted && data) {
          setUserAgents(data);
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
  }, []);

  return { userAgents, isLoading };
}

export default useGetUserAgentsList;
