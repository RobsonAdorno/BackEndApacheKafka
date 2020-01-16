import { Server } from "./api/config/server";

const server = new Server

server.bootstrap()  
        .then((serverConfig) => {
                console.log(serverConfig.application.address())
        })

        .catch((exception) => {
            console.log('Error in App class')
            throw new Error(exception)
        })