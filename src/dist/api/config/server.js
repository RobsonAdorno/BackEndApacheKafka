"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = __importDefault(require("restify"));
class Server {
    constructor(application) {
        this.application = application;
    }
    initServer(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.createConfig(routers, resolve);
            }
            catch (exception) {
                console.error(' => Error in Server class');
                reject(exception);
                throw new Error(exception);
            }
        });
    }
    createConfig(routers, resolve) {
        this.application = restify_1.default.createServer({
            version: '1.0.0'
        });
        this.application.use(restify_1.default.plugins.bodyParser());
        routers.allRouters(this.application);
        this.application.listen(8080, () => {
            resolve(this.application);
        });
    }
    bootstrap(routers) {
        return this.initServer(routers).then(() => this);
    }
}
exports.Server = Server;
