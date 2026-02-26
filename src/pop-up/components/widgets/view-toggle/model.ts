import { createEvent, createStore } from 'effector';

type AppView = 'main' | 'list';

export const changeAppView = createEvent<AppView>();
export const toggleView = createEvent();

export const $appView = createStore<AppView>('main')
  .on(changeAppView, (_, value) => value)
  .on(toggleView, (state) => (state === 'main' ? 'list' : 'main'));
