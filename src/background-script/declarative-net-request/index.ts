class DNetRequestManager {
  async addRule(rule: chrome.declarativeNetRequest.Rule) {
    try {
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [rule],
        removeRuleIds: [],
      });
      console.log(`Rule with ID ${rule.id} added successfully.`);
    } catch (error) {
      console.error(`Failed to add rule with ID ${rule.id}:`, error);
    }
  }

  async removeRule(ruleId: number) {
    try {
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [],
        removeRuleIds: [ruleId],
      });
      console.log(`Rule with ID ${ruleId} removed successfully.`);
    } catch (error) {
      console.error(`Failed to remove rule with ID ${ruleId}:`, error);
    }
  }

  async getRules() {
    try {
      const rules = await chrome.declarativeNetRequest.getDynamicRules();
      console.log('Current dynamic rules:', rules);
      return rules;
    } catch (error) {
      console.error('Failed to get dynamic rules:', error);
      return [];
    }
  }
}

export default DNetRequestManager;
