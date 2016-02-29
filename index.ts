import Aurorajs = require("aurorajs");
import express = require("express");

interface IAddress {
    uuid: string;
    dev: string;
    address: number;
}
export = class Aurora extends Aurorajs {
    constructor(sensors: IAddress[], tz: string,exe?:string) {
        super(sensors, tz,exe);
    }

    Router() {
        let _this = this;
        let Router = express.Router()
        Router.get('/data', function(req, res) {
            let data = _this.data();
            res.send(data);
        });
        Router.get('/reconfigure', function(req, res) {
            let data = _this.reconfigure({addresses: req.body.addresses, timezone: req.body.tz, exec: req.body.exec});
            res.send(data);
        });

        return Router;

    }
} 

