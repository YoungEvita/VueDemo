const protocol = window.location.protocol
const hostname = window.location.hostname
const port = process.env.VUE_APP_WS_PORT
const timeout = process.env.VUE_WS_TIMEOUT
export default {
    port: process.env.NODE_ENV === "development" ?
        protocol === "" ?
        "" :
        ":" + port : protocol === "http:" ?
        ":80" : "443",
    url: protocol === "http:" ? "ws://" + hostname : "ws://" + hostname,
    timeout: timeout
};