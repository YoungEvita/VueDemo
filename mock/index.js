const WebSocketServer = require('ws').Server
const port = 8989
const wss = new WebSocketServer({ port: port })

wss.on('connection', function(ws) {
    console.log('ws server connnection listenning: %s', port)
    ws.on('message', function(message) {
        console.log("recieved message: ", message)
    });
    ws.on('close', function(e) {
        console.log("websocket server colsed..", e)
    })
});

wss.on('close', function(argument) {
    console.log('ws close..');
})