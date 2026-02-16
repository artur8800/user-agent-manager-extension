export type MESSAGE_TYPES = 'GET_USER_AGENTS' | 'ADD_USER_AGENT';

export class AppMessageSender {
  sendMessage<T>(message: MESSAGE_TYPES): Promise<T | null> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ message }, (response) => {
        console.log('Send message response:', response);
        if (chrome.runtime.lastError) {
          console.error('Error sending message:', chrome.runtime.lastError);
          resolve(null);
        } else {
          resolve(response.payload as T);
        }
      });
    });
  }

  initMessageListener<T>(callback: (message: MESSAGE_TYPES, payload?: unknown) => Promise<T>) {
    chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
      console.log('Received message:', request, request.payload);
      callback(request.message, request.payload).then((response) => {
        console.log('CALLBACK response:', response);
        sendResponse(response);
      });
    });
  }
}
