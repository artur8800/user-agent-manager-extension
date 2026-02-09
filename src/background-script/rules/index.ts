const resourceTypes = [
  'main_frame',
  'sub_frame',
  'stylesheet',
  'script',
  'image',
  'font',
  'object',
  'xmlhttprequest',
  'ping',
  'csp_report',
  'media',
  'websocket',
  'webtransport',
  'webbundle',
  'other',
];

function formatRule(ua: string): chrome.declarativeNetRequest.Rule {
  return {
    id: 1,
    priority: 1,
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          header: 'user-agent',
          operation: 'set',
          value: ua,
        },
      ],
    },
    condition: {
      resourceTypes: resourceTypes as chrome.declarativeNetRequest.ResourceType[],
    },
  };
}

export { formatRule };
