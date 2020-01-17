import { Router } from "../router";
import { CommonRouter } from "../commonRouter";

import restify from 'restify'

export class UserRouter extends CommonRouter {
    
    allRouters(application: restify.Server) {
        application.get('/', async (req, resp) => {
            return resp.json('BOA!')
        })
    }
}