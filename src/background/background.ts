console.log("Hello world from bakground script");

const subscribeMsg = {
  event: "bts:subscribe",
  data: {
    channel: "btcusdt",
  },
};

let ws: WebSocket;

function initWebsocket(): void {
  ws = new WebSocket("wss://ws.bitstamp.net");
  ws.onopen = function () {
    ws.send(JSON.stringify(subscribeMsg));
  };
  ws.onmessage = function (evt: MessageEvent) {
    const response = JSON.parse(evt.data);
    console.log("debu", evt);
    switch (response.event) {
      case "bts:subscribe": {
        console.log("test", response.data);
        break;
      }
      case "bts:request_reconnect": {
        initWebsocket();
        break;
      }
    }
  };
  ws.onclose = function () {
    console.log("Websocket connection closed");
    initWebsocket();
  };
}

initWebsocket();
