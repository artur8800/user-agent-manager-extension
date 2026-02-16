import { createEvent, createStore } from 'effector';

import UserAgentItem from '@/types/ua';

const $uaList = createStore<UserAgentItem[]>([]);

const addUserAgent = createEvent<UserAgentItem>('addUserAgent');
const addDefaultData = createEvent<UserAgentItem[]>('addDefaultData');
const selectUserAgent = createEvent<string>('selectUserAgent');
const getRandomUserAgent = createEvent<UserAgentItem>('getRandomUserAgent');
const getActiveUserAgent = createEvent<UserAgentItem>('getActiveUserAgent');

$uaList.on(addDefaultData, (_, defaultData) => defaultData);
$uaList.on(addUserAgent, (state, newUA: UserAgentItem) => [...state, newUA]);
$uaList.on(selectUserAgent, (state, id) =>
  state.map((ua) => (ua.id === id ? { ...ua, isActive: true } : { ...ua, isActive: false }))
);
$uaList.on(getRandomUserAgent, (state) => {
  if (state.length === 0) return state;
  const randomIndex = Math.floor(Math.random() * state.length);
  return state.map((ua, index) => ({ ...ua, isActive: index === randomIndex }));
});

const $activeUserAgent = $uaList.map((list) => list.find((ua) => ua.isActive) ?? null);
const $randomUserAgent = $uaList.map((list) => {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
});

export {
  $activeUserAgent,
  $randomUserAgent,
  $uaList,
  addDefaultData,
  addUserAgent,
  getActiveUserAgent,
  getRandomUserAgent,
  selectUserAgent,
};
