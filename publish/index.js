"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var bodyParser = require("body-parser");
var express = require("express");
var typeorm_1 = require("typeorm");
var Models_1 = require("./models/Models");
var PORT = process.env.PORT || 4100;
var options = {
    type: 'sqlite',
    database: __dirname + "/data/my.sqlite",
    entities: [
        Models_1.Section,
        Models_1.Chiffre,
        Models_1.User,
        Models_1.Client,
    ],
    synchronize: true,
    logging: false
};
var App1 = (function () {
    function App1() {
        this.app = express();
        typeorm_1.createConnection(options).then(function (r) { return console.log('cnx db is ' + r.isConnected); });
        this.jsonConfig();
        this.route();
    }
    App1.prototype.db = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var connection;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, typeorm_1.createConnection(options)];
                    case 1:
                        connection = _a.sent();
                        return [2];
                }
            });
        });
    };
    App1.prototype.route = function () {
        routing_controllers_1.useExpressServer(this.app, {
            cors: true,
            middlewares: [],
            routePrefix: '/api',
            controllers: [
                __dirname + "/controller/*.ts",
                __dirname + "/controller/*.js",
            ],
            defaults: {
                nullResultCode: 404,
                undefinedResultCode: 204,
                paramOptions: {
                    required: true
                }
            }
        });
    };
    App1.prototype.jsonConfig = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    App1.prototype.start = function () {
        this.app.listen(PORT, function () {
            console.log("Server is running in http://localhost:" + PORT);
        });
    };
    return App1;
}());
new App1().start();
