"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./api/config/server");
const server = new server_1.Server;
server.bootstrap()
    .then((serverConfig) => {
    console.log(serverConfig.application.address());
})
    .catch((exception) => {
    console.log('Error in App class');
    throw new Error(exception);
});
