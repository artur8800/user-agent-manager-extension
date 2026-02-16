import { IBrowser, IDevice, IOS } from 'ua-parser-js';

export default interface UserAgentItem {
  ua: string;
  browser: IBrowser;
  os: IOS;
  device: IDevice;
  pct: number;
  id: string;
  isActive: boolean;
}
