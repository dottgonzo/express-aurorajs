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
        Router.get('/data', function (req, res) {
            var data = _this.data();
            res.send(data);
        });
        Router.get('/reconfigure', function (req, res) {
            var data = _this.reconfigure({ addresses: req.body.addresses, timezone: req.body.tz, exec: req.body.exec });
            res.send(data);
        });
        return Router;
    };
    return Aurora;
}(Aurorajs));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBT3BDLGlCQUFTO0lBQXFCLDBCQUFRO0lBQ2xDLGdCQUFZLE9BQW1CLEVBQUUsRUFBVSxFQUFDLEdBQVc7UUFDbkQsa0JBQU0sT0FBTyxFQUFFLEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUNqQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7WUFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUMxRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBQ0wsYUFBQztBQUFELENBcEJTLEFBb0JSLENBcEI2QixRQUFRLEVBb0JyQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1cm9yYWpzID0gcmVxdWlyZShcImF1cm9yYWpzXCIpO1xuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuaW50ZXJmYWNlIElBZGRyZXNzIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgZGV2OiBzdHJpbmc7XG4gICAgYWRkcmVzczogbnVtYmVyO1xufVxuZXhwb3J0ID0gY2xhc3MgQXVyb3JhIGV4dGVuZHMgQXVyb3JhanMge1xuICAgIGNvbnN0cnVjdG9yKHNlbnNvcnM6IElBZGRyZXNzW10sIHR6OiBzdHJpbmcsZXhlPzpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2Vuc29ycywgdHosZXhlKTtcbiAgICB9XG5cbiAgICBSb3V0ZXIoKSB7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGxldCBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG4gICAgICAgIFJvdXRlci5nZXQoJy9kYXRhJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gX3RoaXMuZGF0YSgpO1xuICAgICAgICAgICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBSb3V0ZXIuZ2V0KCcvcmVjb25maWd1cmUnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBfdGhpcy5yZWNvbmZpZ3VyZSh7YWRkcmVzc2VzOiByZXEuYm9keS5hZGRyZXNzZXMsIHRpbWV6b25lOiByZXEuYm9keS50eiwgZXhlYzogcmVxLmJvZHkuZXhlY30pO1xuICAgICAgICAgICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBSb3V0ZXI7XG5cbiAgICB9XG59IFxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
