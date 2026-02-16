import { AppMessageSender, MessageMap } from '@lib/messages/index';

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

  const oldRules = await dnrManger.getRules();
  const oldRuleIds = oldRules.map((rule) => rule.id);

  const activeUa = uaCatalog.getActiveUa(oldRules[0]);

  console.log('Current active UA:', activeUa);

  const formattedList = uaCatalog.formatUaList();

  console.log('Formatted UA List:', formattedList);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: [
      formatRule(
        'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.4.2.0 Mobile Safari/537.36'
      ),
    ],
  });

  await storage.init<unknown[]>({ defaultData: formattedList });

  console.log('Dynamic rule added successfully.');

  AppMessageSenderInstance.initMessageListener(async (message, payload) => {
    switch (message) {
      case 'GET_USER_AGENTS': {
        return (await storage.getItems<UserAgentItem[]>('userAgents')) ?? [];
      }

      case 'ADD_USER_AGENT': {
        await storage.addItems('userAgents', payload?.userAgent ? [payload.userAgent] : null);
        return true;
      }
    }
  });
})();
