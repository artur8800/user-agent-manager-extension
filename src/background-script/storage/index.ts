class AppStorage {
  instance: chrome.storage.StorageArea;

  constructor() {
    this.instance = chrome.storage.local;
  }

  clearStorage() {
    return new Promise((resolve) => {
      this.instance.clear(() => {
        if (chrome.runtime.lastError) {
          console.error('Error clearing storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          console.log('Storage cleared successfully.');
          resolve(true);
        }
      });
    });
  }

  addItem(key: string, value: unknown) {
    return new Promise((resolve) => {
      this.instance.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error adding item to storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          console.log(`Item added to storage: ${key} = ${value}`);
          resolve(true);
        }
      });
    });
  }

  init() {
    return new Promise((resolve) => {
      this.instance.get(null, (items) => {
        if (chrome.runtime.lastError) {
          console.error('Error initializing storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          console.log('Storage initialized with items:', items);
          resolve(true);
        }
      });
    });
  }
}

export default AppStorage;
