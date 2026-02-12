export type MESSAGE_TYPES = 'GET_USER_AGENTS' | 'ADD_USER_AGENT';

export class BackgroundMessage {
  sendMessage(message: MESSAGE_TYPES, payload?: unknown): Promise<unknown> {
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
}
