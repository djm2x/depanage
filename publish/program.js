"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var startup_1 = require("./startup");
var PORT = process.env.PORT || 4100;
var host = new startup_1.Startup();
host.db()
    .jsonConfig()
    .route()
    .ssr()
    .start(PORT);
