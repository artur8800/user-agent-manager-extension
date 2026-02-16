import { createEvent, createStore } from 'effector';

import UserAgentItem from '@/types/ua';

const $uaList = createStore<UserAgentItem[]>([]);

const addUserAgent = createEvent<UserAgentItem>('addUserAgent');
const addDefaultData = createEvent<UserAgentItem[]>('addDefaultData');
const selectUserAgent = createEvent<string>('selectUserAgent');
const deselectUserAgent = createEvent<string>('deselectUserAgent');
const getRandomUserAgent = createEvent('getRandomUserAgent');

$uaList.on(addDefaultData, (_, defaultData) => defaultData);
$uaList.on(addUserAgent, (state, newUA: UserAgentItem) => [...state, newUA]);
$uaList.on(selectUserAgent, (state, id) => state.map((ua) => (ua.id === id ? { ...ua, isActive: true } : ua)));
$uaList.on(deselectUserAgent, (state, id) => state.map((ua) => (ua.id === id ? { ...ua, isActive: false } : ua)));
$uaList.on(getRandomUserAgent, (state) => {
  if (state.length === 0) return state;
  const randomIndex = Math.floor(Math.random() * state.length);
  return state.map((ua, index) => ({ ...ua, isActive: index === randomIndex }));
});

export { $uaList, addDefaultData, addUserAgent, deselectUserAgent, getRandomUserAgent, selectUserAgent };
