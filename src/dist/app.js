"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./api/config/server");
const userRouter_1 = require("./api/routes/user/userRouter");
const server = new server_1.Server();
const userRouter = new userRouter_1.UserRouter();
server.bootstrap(userRouter)
    .then((serverConfig) => {
    console.log(serverConfig.application.address());
})
    .catch((exception) => {
    console.log('Error in App class');
    throw new Error(exception);
});
