import { Server } from './api/config/server'
import { UserRouter } from './api/routes/user/userRouter'

const server = new Server()
const userRouter = new UserRouter()

server.bootstrap(userRouter)  
        .then((serverConfig) => {
                console.log(serverConfig.application.address())
        })

        .catch((exception) => {
            console.log('Error in App class')
            throw new Error(exception)
        })