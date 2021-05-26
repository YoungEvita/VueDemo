import config from "./config";
import store from "@/store";

const webSocket = {
    ws: null,
    timeout: config.timeout,
    timeoutObj: null,
    initWebsocket: function() {
        if (!this.ws) {
            try {
                this.ws = new WebSocket(config.url + config.port);
            } catch (e) {
                this.ws = null;
                return false;
            }
            console.log("init websocket...");
            this.ws.onopen = this.onopen.bind(this);
            this.ws.onmessage = this.onmessage.bind(this);
            this.ws.onclose = this.onclose.bind(this);
        }
        // 订阅mutation， 可以通过判断mutation的值来进行一些逻辑处理
        store.subscribe((mutation) => {
            console.log("mutation:.", mutation);
        });
    },
    onopen: function(e) {
        console.log("websocket onopen: ", e);
        this.heartBeat();
        this.timeoutObj = setTimeout(this.heartBeat, this.timeout);
    },
    /**
     * @description:  心跳连接以防websocket 断开
     * @param {*}
     * @return {*}
     */
    heartBeat: function() {
        console.log("heartBeat...");
        store.commit("UPDATE_MESSAGE", "Nice to meet you");
        if (this.ws) {
            this.ws.send("Nice to meet you");
        }
    },
    /**
     * @description: 心跳机制
     * @param {*}
     * @return {*}
     */
    resetHeartBeat: function() {
        clearTimeout(this.timeoutObj);
        this.heartBeat();
    },
    onmessage: function(res) {
        try {
            console.log("onmessage...:", res);
            // 这里可以根据接收的信息进行操作

        } catch (e) {
            return;
        }
    },
    onclose: function(e) {
        console.log("websocket onclose: ", e);
        this.ws = null;
    },
};

export default webSocket;