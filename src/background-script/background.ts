import { AppMessageSender } from '@/shared/messages/index';

import { STORAGE_KEY } from '@/shared/const';
import UserAgentItem from '@/types/ua';

import DNetRequestManager from './dnet-request';
import { formatRule } from './rules';
import AppStorage from './storage';
import UserAgentCatalog from './ua';

(async () => {
  const dnrManger = new DNetRequestManager();
  const uaCatalog = new UserAgentCatalog();
  const storage = new AppStorage();
  const AppMessageSenderInstance = new AppMessageSender();

  const previousRules = await dnrManger.getRules();
  const previousRulesId = previousRules.map((rule) => rule.id);

  const activeUa = uaCatalog.getActiveUa(previousRules[0]);

  console.log('Current active UA:', activeUa);

  const formattedList = uaCatalog.formatUaList();

  console.log('Formatted UA List:', formattedList);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: previousRulesId,
    addRules: [
      formatRule(
        'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.4.2.0 Mobile Safari/537.36'
      ),
    ],
  });

  await storage.init<UserAgentItem[]>({ defaultData: formattedList, storageKey: STORAGE_KEY });

  console.log('Dynamic rule added successfully.');

  AppMessageSenderInstance.initMessageListener(async (message, payload) => {
    switch (message) {
      case 'GET_USER_AGENTS': {
        const result = await storage.getItems<UserAgentItem[]>(STORAGE_KEY);
        console.log('User agents retrieved from storage:', result);
        return result ?? [];
      }

      case 'ADD_USER_AGENT': {
        await storage.addItems(STORAGE_KEY, payload?.userAgent ? [payload.userAgent] : null);
        return true;
      }
    }
  });
})();
