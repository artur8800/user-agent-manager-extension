import UserAgentCatalog from './ua';
import DNetRequestManager from './dnet-request';
import { formatRule } from './rules';

(async () => {
  const dnrManger = new DNetRequestManager();
  const uaCatalog = new UserAgentCatalog();

  const oldRules = await dnrManger.getRules();
  const oldRuleIds = oldRules.map((rule) => rule.id);
  const activeUa = uaCatalog.getActiveUa(oldRules[0]);

  console.log('Current active UA:', activeUa);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: [
      formatRule(
        'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.4.2.0 Mobile Safari/537.36'
      ),
    ],
  });

  console.log('Dynamic rule added successfully.');
})();
