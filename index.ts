import Aurorajs = require("aurorajs");
import express = require("express");

interface IAddress {
    uuid: string;
    dev: string;
    address: number;
}
export = class Aurora extends Aurorajs {
    constructor(sensors: IAddress[], tz: string, exe?: string) {
        super(sensors, tz, exe);
    }

    Router() {
        let _this = this;
        let Router = express.Router();
        Router.get("/data", function(req, res) {
            _this.data().then(function(d) {
                res.send(d);

            }).catch(function(err) {
                res.send(err);

            });
        });

        Router.get("/alarms", function(req, res) {
            _this.alarms().then(function(d) {
                res.send(d);
            }).catch(function(err) {
                res.send(err);

            });
        });

        Router.get("/reconfigure", function(req, res) {
            let data = _this.reconfigure({ addresses: req.body.addresses, timezone: req.body.tz, exec: req.body.exec });
            res.send(data);
        });

        return Router;

    }
}

