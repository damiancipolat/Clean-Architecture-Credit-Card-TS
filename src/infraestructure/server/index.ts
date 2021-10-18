import express, {Application} from 'express';
import http from 'http';

import events from './events';
import {configuration} from '../config/';

// Define routes and events
const routes = require('../../interface/routes/');

//Load config.
const {
    server: { port }
} = configuration;

const app:Application = express();
const server = http.createServer(app);

// middleware base 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Bind routes.
app.use('/', routes);

app.listen(port, async ()=>{
    events.onListen(port);
});

// Define server "special" event to handle situations.
server.on('error', events.onServerError);
process.on('SIGINT', () => events.onProcessKill(server));
process.on('SIGTERM', () => events.onProcessKill(server));
process.on('unhandledRejection', events.onException);
process.on('uncaughtException', (err) => events.onException(err));