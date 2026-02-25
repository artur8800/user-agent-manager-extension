import { createEffect, createEvent, createStore, sample } from 'effector';

import { AppMessageSender, MESSAGE_TYPES } from '@/shared/messages';
import UserAgentItem from '@/types/ua';

const sender = new AppMessageSender();

export const getUserAgentsFx = createEffect(async () => {
  const result = await sender.sendMessage(MESSAGE_TYPES.GET_USER_AGENTS, null);

  return result ?? [];
});

export const addUserAgent = createEvent<UserAgentItem>();
export const addDefaultData = createEvent<UserAgentItem[]>();
export const selectUserAgent = createEvent<string>();
export const getRandomUserAgent = createEvent();

export const $uaList = createStore<UserAgentItem[]>([])
  .on(addDefaultData, (_, data) => data)
  .on(addUserAgent, (state, ua) => [...state, ua])
  .on(selectUserAgent, (state, id) =>
    state.map((ua) => (ua.id === id ? { ...ua, isActive: true } : { ...ua, isActive: false }))
  )
  .on(getRandomUserAgent, (state) => {
    if (!state.length) return state;
    const index = Math.floor(Math.random() * state.length);
    return state.map((ua, i) => ({ ...ua, isActive: i === index }));
  });

export const $uaListLoading = getUserAgentsFx.pending;

export const $activeUserAgent = $uaList.map((list) => list.find((ua) => ua.isActive) ?? null);

export const $randomUserAgent = $uaList.map((list) => {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
});

export const $uaListError = createStore<string | null>(null).on(getUserAgentsFx.failData, (_, err) => err.message);

sample({
  clock: getUserAgentsFx.doneData,
  target: addDefaultData,
});
