import { createEvent, createStore } from 'effector';

import UserAgentItem from '@/types/ua';

const $uaList = createStore<UserAgentItem[]>([]);

const addUserAgent = createEvent<UserAgentItem>('addUserAgent');
const removeUserAgent = createEvent<UserAgentItem>('removeUserAgent');
const addDefaultData = createEvent<UserAgentItem[]>('addDefaultData');

$uaList.on(addDefaultData, (_, defaultData) => defaultData);
$uaList.on(addUserAgent, (state, newUA: UserAgentItem) => [...state, newUA]);
$uaList.on(removeUserAgent, (state, uaToRemove: UserAgentItem) => state.filter((ua) => ua !== uaToRemove));

export { $uaList, addUserAgent, removeUserAgent };
