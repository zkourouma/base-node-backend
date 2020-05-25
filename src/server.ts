import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as http from 'http';

import * as conn from './storage';

import api from './api';

const SERVER_PORT = 8000;

const app = new Koa();
app.use(bodyparser());

conn.initDB();
app.use(api.routes()).use(api.allowedMethods());

const server = http.createServer(app.callback());

server.timeout = 0;
server.keepAliveTimeout = 0;

console.log(`Server running at port ${SERVER_PORT}`);

server.listen(SERVER_PORT);
