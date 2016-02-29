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
    function Aurora(sensors, tz) {
        _super.call(this, sensors, tz);
    }
    Aurora.prototype.Router = function () {
        var _this = this;
        var Router = express.Router();
        Router.get('/data', function (req, res) {
            var data = _this.data();
            res.send(data);
        });
        Router.get('/reconfigure', function (req, res) {
            var data = _this.reconfigure({ addresses: req.body.addresses, timezone: req.body.tz });
            res.send(data);
        });
        return Router;
    };
    return Aurora;
}(Aurorajs));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBT3BDLGlCQUFTO0lBQXFCLDBCQUFRO0lBQ2xDLGdCQUFZLE9BQW1CLEVBQUUsRUFBVTtRQUN2QyxrQkFBTSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7WUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHO1lBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNyRixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBQ0wsYUFBQztBQUFELENBdEJTLEFBc0JSLENBdEI2QixRQUFRLEVBc0JyQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1cm9yYWpzID0gcmVxdWlyZShcImF1cm9yYWpzXCIpO1xuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuaW50ZXJmYWNlIElBZGRyZXNzIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgZGV2OiBzdHJpbmc7XG4gICAgYWRkcmVzczogbnVtYmVyO1xufVxuZXhwb3J0ID0gY2xhc3MgQXVyb3JhIGV4dGVuZHMgQXVyb3JhanMge1xuICAgIGNvbnN0cnVjdG9yKHNlbnNvcnM6IElBZGRyZXNzW10sIHR6OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2Vuc29ycywgdHopO1xuXG4gICAgfVxuXG4gICAgUm91dGVyKCkge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICBsZXQgUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuICAgICAgICBSb3V0ZXIuZ2V0KCcvZGF0YScsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IF90aGlzLmRhdGEoKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgUm91dGVyLmdldCgnL3JlY29uZmlndXJlJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gX3RoaXMucmVjb25maWd1cmUoe2FkZHJlc3NlczogcmVxLmJvZHkuYWRkcmVzc2VzLCB0aW1lem9uZTogcmVxLmJvZHkudHp9KTtcbiAgICAgICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiBSb3V0ZXI7XG5cbiAgICB9XG59IFxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
