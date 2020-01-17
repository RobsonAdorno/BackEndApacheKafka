import restify from 'restify'
import { Router } from '../routes/router'

export class Server {
    application: restify.Server

    constructor(application?:restify.Server) {
        this.application = application!
    }

    initServer(routers: Router):Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.createConfig(routers,resolve)

            } catch(exception) {
                console.error(' => Error in Server class')
                reject(exception)
                throw new Error(exception)
            }
        })
    }

    createConfig(routers:Router,resolve:any) {
        this.application = restify.createServer({
            version: '1.0.0'
        })

        this.application.use(restify.plugins.bodyParser())

        routers.allRouters(this.application)

        this.application.listen(8080, () => {
            resolve(this.application)
        })
    }

     bootstrap(routers:Router):Promise<Server> {
        return this.initServer(routers).then(() => this)
    }
}