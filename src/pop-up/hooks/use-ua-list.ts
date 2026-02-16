import { useEffect, useState } from 'react';

import { AppMessageSender } from '@/lib/messages';
import UserAgentItem from '@/types/ua';

function useUserAgentsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [userAgents, setUserAgents] = useState<UserAgentItem[]>([]);

  useEffect(() => {
    const sender = new AppMessageSender();
    let isMounted = true;

    sender
      .sendMessage('GET_USER_AGENTS', undefined)
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

export default useUserAgentsList;
