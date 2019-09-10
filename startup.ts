import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { createExpressServer, useExpressServer } from 'routing-controllers';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Application, Request, Response } from 'express';
import { createConnection, ConnectionOptions } from 'typeorm';
import { Section, Chiffre, User, Client } from './models/Models';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

export class Startup {

  private app: Application = express();

  constructor() { }

  start(port): Startup {
    this.app.listen(port, () => console.log(`Server is running in http://localhost:${port}`));
    return this;
  }

  jsonConfig(): Startup {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    return this;
  }

  route(): Startup {
    useExpressServer(this.app, {
      // register created express server in routing-controllers
      // and configure it the way you need (controllers, validation, etc.)
      cors: true,
      middlewares: [],
      routePrefix: '/api',
      controllers: [
        `${__dirname}/controller/*.ts`,
        `${__dirname}/controller/*.js`,
      ],
      defaults: {
        // with this option, null will return 404 by default
        nullResultCode: 404,
        // with this option, void or Promise<void> will return 204 by default
        undefinedResultCode: 204,
        paramOptions: {
          // with this option, argument will be required by default
          required: true
        }
      }
    });
    return this;
  }

  db(): Startup {
    const options: ConnectionOptions = {
      type: 'sqlite',
      database: `${__dirname}/data/my.sqlite`,
      // entities: [__dirname + "/entity/*{.js,.ts}"],
      entities: [
        Section,
        Chiffre,
        User,
        Client,
      ],
      synchronize: true,
      logging: false
    };
    createConnection(options).then(r => console.log('cnx db is ' + r.isConnected));
    return this;
  }

  ssr(): Startup {
    const DIST_FOLDER = join(process.cwd(), 'dist/browser');
    const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    this.app.engine('html', ngExpressEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    }));

    this.app.set('view engine', 'html');
    this.app.set('views', DIST_FOLDER);

    // Example Express Rest API endpoints
    this.app.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    this.app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

    // All regular routes use the Universal engine
    this.app.route('*').get((req: Request, res: Response) => {
      console.log(req.originalUrl);
      // res.render('index', { req });
      res.render(
        'index', //
        {
          req: req,
          res: res,
          providers: [
            { provide: 'REQUEST', useValue: req },
            { provide: 'RESPONSE', useValue: res }
          ]
        }, //
        (err: Error, html: string) => {
          res.status(html ? 200 : 500).send(html || err.message);
        }
      );
    });
    return this;
  }

}

