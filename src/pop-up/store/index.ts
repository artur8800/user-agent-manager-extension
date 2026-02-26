import { createEffect, createEvent, createStore, sample } from 'effector';
import { toast } from 'sonner';

import { AppMessageSender, MESSAGE_TYPES } from '@/shared/messages';
import UserAgentItem from '@/types/ua';

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

export const $activeUserAgent = $uaList.map((list) => list.find((ua) => ua.isActive) ?? null);

export const $randomUserAgent = $uaList.map((list) => {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
});

const sender = new AppMessageSender();

export const getUserAgentsFx = createEffect(async () => {
  try {
    const result = await sender.sendMessage(MESSAGE_TYPES.GET_USER_AGENTS, null);

    return result ?? [];
  } catch (error) {
    console.error('GET_USER_AGENTS failed:', error);
    throw error;
  }
});

export const addUserAgentFx = createEffect(async (userAgent: string): Promise<UserAgentItem[]> => {
  const result = await sender.sendMessage(MESSAGE_TYPES.ADD_USER_AGENT, { userAgent });

  if (!result) {
    throw new Error('Failed to add user agent');
  }

  return result;
});

export const $uaListLoading = getUserAgentsFx.pending;

export const $uaListError = createStore<string | null>(null)
  .on(getUserAgentsFx.failData, (_, error) => {
    if (error instanceof Error) return error.message;
    return 'Unknown error';
  })
  .reset(getUserAgentsFx);

sample({
  clock: getUserAgentsFx.doneData,
  target: addDefaultData,
});

sample({
  clock: addUserAgentFx.doneData,
  target: addDefaultData,
});

const TOAST_SUCCESS_TEXT = 'Data has been added successfully!';
const TOAST_ERROR_TEXT = 'Failed to add data';

addUserAgentFx.done.watch(() => {
  toast.success(TOAST_SUCCESS_TEXT, {
    position: 'top-center',
  });
});

addUserAgentFx.failData.watch((error) => {
  toast.error(error.message ?? TOAST_ERROR_TEXT);
});
