import mobileList from '@/lib/ua-lists/ua-mobile.json';
import desktopList from '@/lib/ua-lists/ua-desktop.json';

class UserAgent {
  constructor() {
    this.mobileList = mobileList;
    this.desktopList = desktopList;
  }

  static log() {
    console.log('UserAgent class initialized with mobile and desktop lists.');
    console.log('Mobile User Agents:', mobileList);
    console.log('Desktop User Agents:', desktopList);
  }

  static getMobileList() {
    return mobileList;
  }

  static getDesktopList() {
    return desktopList;
  }
}

export default UserAgent;
