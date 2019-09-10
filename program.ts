import { Startup } from './startup';

const PORT = process.env.PORT || 4100;
const host = new Startup();

host.db()
  .jsonConfig()
  .route()
  .ssr()
  .start(PORT);

