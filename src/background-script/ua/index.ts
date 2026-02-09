import mobileList from '@/lib/ua-lists/ua-mobile.json';
import desktopList from '@/lib/ua-lists/ua-desktop.json';

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

  public static log() {
    console.log([...mobileList, ...desktopList]);
  }

  getMobileList() {
    return this.mobileList;
  }

  getDesktopList() {
    return this.desktopList;
  }
}

export default UserAgentCatalog;
