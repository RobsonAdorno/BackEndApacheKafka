"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class CommonRouter extends router_1.Router {
    constructor() {
        super(...arguments);
        this.save = (req, res) => {
            const [{ name, age }] = req.body;
        };
    }
}
exports.CommonRouter = CommonRouter;
