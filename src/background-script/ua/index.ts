import { UAParser } from 'ua-parser-js';

import desktopList from '@/shared/ua-lists/ua-desktop.json';
import mobileList from '@/shared/ua-lists/ua-mobile.json';
import UserAgentItem from '@/types/ua';

type UAList = {
  ua: string;
  pct: number;
};

class UserAgentCatalog {
  mobileList: UAList[];
  desktopList: UAList[];

  constructor() {
    this.mobileList = mobileList;
    this.desktopList = desktopList;
  }

  log() {
    console.log([...mobileList, ...desktopList]);
  }

  getMobileList() {
    return this.mobileList;
  }

  getDesktopList() {
    return this.desktopList;
  }

  getActiveUa(rule: chrome.declarativeNetRequest.Rule) {
    if (rule?.action?.type === 'modifyHeaders') {
      const headers = rule.action.requestHeaders;
      if (headers && headers.length > 0) {
        const uaHeader = headers.find((h) => h.header === 'user-agent');
        return uaHeader?.value || null;
      }
    }
    return null;
  }

  formatUaItem(value: string, totalCount: number): UserAgentItem {
    const uaParser = new UAParser();
    return {
      id: `ua-${totalCount}`,
      ua: value.trim(),
      pct: 0,
      browser: uaParser.setUA(value).getBrowser(),
      os: uaParser.getOS(),
      device: uaParser.getDevice(),
      isActive: false,
    };
  }

  formatUaList(): UserAgentItem[] {
    return [...this.mobileList, ...this.desktopList].map((item, index) => {
      const uaParser = new UAParser();

      return {
        id: `ua-${index}`,
        ua: item.ua,
        pct: item.pct,
        browser: uaParser.setUA(item.ua).getBrowser(),
        os: uaParser.getOS(),
        device: uaParser.getDevice(),
        isActive: false,
      };
    });
  }
}

export default UserAgentCatalog;
