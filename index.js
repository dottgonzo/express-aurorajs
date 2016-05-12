"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aurorajs = require("aurorajs");
var express = require("express");
module.exports = (function (_super) {
    __extends(Aurora, _super);
    function Aurora(sensors, tz, exe) {
        _super.call(this, sensors, tz, exe);
    }
    Aurora.prototype.Router = function () {
        var _this = this;
        var Router = express.Router();
        Router.get("/data", function (req, res) {
            _this.data().then(function (d) {
                res.send(d);
            }).catch(function (err) {
                res.send(err);
            });
        });
        Router.get("/reconfigure", function (req, res) {
            var data = _this.reconfigure({ addresses: req.body.addresses, timezone: req.body.tz, exec: req.body.exec });
            res.send(data);
        });
        return Router;
    };
    return Aurora;
}(Aurorajs));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBT3BDLGlCQUFTO0lBQXFCLDBCQUFRO0lBQ2xDLGdCQUFZLE9BQW1CLEVBQUUsRUFBVSxFQUFFLEdBQVk7UUFDckQsa0JBQU0sT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUNqQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQztnQkFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxHQUFHO2dCQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHO1lBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDNUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXpCUyxBQXlCUixDQXpCNkIsUUFBUSxFQXlCckMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXJvcmFqcyA9IHJlcXVpcmUoXCJhdXJvcmFqc1wiKTtcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cbmludGVyZmFjZSBJQWRkcmVzcyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIGRldjogc3RyaW5nO1xuICAgIGFkZHJlc3M6IG51bWJlcjtcbn1cbmV4cG9ydCA9IGNsYXNzIEF1cm9yYSBleHRlbmRzIEF1cm9yYWpzIHtcbiAgICBjb25zdHJ1Y3RvcihzZW5zb3JzOiBJQWRkcmVzc1tdLCB0ejogc3RyaW5nLCBleGU/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2Vuc29ycywgdHosIGV4ZSk7XG4gICAgfVxuXG4gICAgUm91dGVyKCkge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICBsZXQgUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICAgICAgUm91dGVyLmdldChcIi9kYXRhXCIsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhKCkudGhlbihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoZCk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKGVycik7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgUm91dGVyLmdldChcIi9yZWNvbmZpZ3VyZVwiLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBfdGhpcy5yZWNvbmZpZ3VyZSh7IGFkZHJlc3NlczogcmVxLmJvZHkuYWRkcmVzc2VzLCB0aW1lem9uZTogcmVxLmJvZHkudHosIGV4ZWM6IHJlcS5ib2R5LmV4ZWMgfSk7XG4gICAgICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJvdXRlcjtcblxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
