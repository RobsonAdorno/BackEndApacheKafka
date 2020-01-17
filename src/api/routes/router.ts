import EventEmmiter from 'events'
import restify from 'restify'

export abstract class Router {
    abstract allRouters(application: restify.Server):void
}