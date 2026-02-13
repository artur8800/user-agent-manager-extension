export type MESSAGE_TYPES = 'GET_USER_AGENTS' | 'ADD_USER_AGENT';

export class AppMessageSender {
  sendMessage<T>(message: MESSAGE_TYPES, payload?: T): Promise<unknown> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ message, payload }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error sending message:', chrome.runtime.lastError);
          resolve(null);
        } else {
          resolve(response);
        }
      });
    });
  }

  initMessageListener<T>(callback: (message: MESSAGE_TYPES, payload?: T) => void) {
    chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
      callback(request.message, request.payload);
      sendResponse({ status: 'received' });
    });
  }
}
