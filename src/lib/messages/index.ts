import UserAgentItem from '@/types/ua';

interface MessageMap {
  GET_USER_AGENTS: {
    request: null | undefined;
    response: UserAgentItem[];
  };
  ADD_USER_AGENT: {
    request: { userAgent: string };
    response: boolean;
  };
}

export type MessageType = keyof MessageMap;

export class AppMessageSender {
  sendMessage<K extends MessageType>(
    message: K,
    payload: MessageMap[K]['request']
  ): Promise<MessageMap[K]['response'] | null> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ message, payload }, (response: { payload: MessageMap[K]['response'] }) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          resolve(null);
          return;
        }
        resolve(response?.payload ?? null);
      });
    });
  }

  initMessageListener<K extends MessageType>(
    callback: (message: K, payload: MessageMap[K]['request']) => Promise<MessageMap[K]['response']>
  ) {
    chrome.runtime.onMessage.addListener(
      (request: { message: K; payload?: MessageMap[K]['request'] }, _, sendResponse) => {
        callback(request.message, request.payload).then((response) => {
          sendResponse({ payload: response });
        });

        return true;
      }
    );
  }
}
