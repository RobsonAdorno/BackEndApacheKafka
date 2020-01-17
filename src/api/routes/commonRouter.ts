import { Router } from './router'

import restify from 'restify'

export abstract class CommonRouter extends Router {
    
    save = (req:restify.Request, res:restify.Response) => {
        res.json('BOA')
    }
}