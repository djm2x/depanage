"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var bodyParser = require("body-parser");
var express = require("express");
var typeorm_1 = require("typeorm");
var Models_1 = require("./models/Models");
var core_1 = require("@angular/core");
var express_engine_1 = require("@nguniversal/express-engine");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var path_1 = require("path");
core_1.enableProdMode();
var Startup = (function () {
    function Startup() {
        this.app = express();
    }
    Startup.prototype.start = function (port) {
        this.app.listen(port, function () { return console.log("Server is running in http://localhost:" + port); });
        return this;
    };
    Startup.prototype.jsonConfig = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        return this;
    };
    Startup.prototype.route = function () {
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
        return this;
    };
    Startup.prototype.db = function () {
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
        typeorm_1.createConnection(options).then(function (r) { return console.log('cnx db is ' + r.isConnected); });
        return this;
    };
    Startup.prototype.ssr = function () {
        var DIST_FOLDER = path_1.join(process.cwd(), 'dist/browser');
        var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
        this.app.engine('html', express_engine_1.ngExpressEngine({
            bootstrap: AppServerModuleNgFactory,
            providers: [
                module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
            ]
        }));
        this.app.set('view engine', 'html');
        this.app.set('views', DIST_FOLDER);
        this.app.get('/api/**', function (req, res) { });
        this.app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));
        this.app.route('*').get(function (req, res) {
            console.log(req.originalUrl);
            res.render('index', { req: req });
        });
        return this;
    };
    return Startup;
}());
exports.Startup = Startup;
