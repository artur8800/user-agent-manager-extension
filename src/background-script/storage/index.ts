import AppLogger from '@lib/logger';

class AppStorage {
  instance: chrome.storage.StorageArea;

  constructor() {
    this.instance = chrome.storage.local;
  }

  clearStorage() {
    return new Promise((resolve) => {
      this.instance.clear(() => {
        if (chrome.runtime.lastError) {
          AppLogger.error('Error clearing storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          AppLogger.log('Storage cleared successfully.');
          resolve(true);
        }
      });
    });
  }

  addItems(key: string, value: unknown) {
    return new Promise((resolve) => {
      this.instance.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          AppLogger.error('Error adding item to storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          AppLogger.log(`Item added to storage: ${key} = ${value}`);
          resolve(true);
        }
      });
    });
  }

  getItems<T>(key: string): Promise<T | null> {
    return new Promise((resolve) => {
      this.instance.get([key], (result: { [key: string]: T }) => {
        if (chrome.runtime.lastError) {
          AppLogger.error('Error retrieving item from storage:', chrome.runtime.lastError);
          resolve(null);
        } else {
          const value = result[key];
          AppLogger.log(`Item retrieved from storage: ${key} = ${value}`);
          resolve(value);
        }
      });
    });
  }

  init<T>({ defaultData, storageKey }: { defaultData: T; storageKey: string }) {
    return new Promise((resolve) => {
      this.instance.get(null, (data: { [key: string]: [T] }) => {
        if (chrome.runtime.lastError) {
          AppLogger.error('Error initializing storage:', chrome.runtime.lastError);
          resolve(false);
        } else {
          const keyToCheck = storageKey;
          if (!data[keyToCheck]) {
            this.addItems(keyToCheck, defaultData);
            AppLogger.log(`Storage initialized with default data under key "${keyToCheck}".`);
          }
          resolve(true);
          AppLogger.log('Data already exists in storage, initialization skipped.', data[keyToCheck]);
        }
      });
    });
  }
}

export default AppStorage;
