import restify from 'restify'

export class Server {
    application: restify.Server

    constructor(application?:restify.Server) {
        this.application = application!
    }

    initServer():Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.createConfig(resolve)

            } catch(exception) {
                console.error(' => Error in Server class')
                throw new Error(exception)
            }
        })
    }

    createConfig(resolve:any) {
        this.application = restify.createServer({
            version: '1.0.0'
        })

        this.application.use(restify.plugins.bodyParser())

        this.application.listen(8080, () => {
            resolve(this.application)
        })
    }

     bootstrap():Promise<Server> {
        return this.initServer().then(() => this)
    }
}