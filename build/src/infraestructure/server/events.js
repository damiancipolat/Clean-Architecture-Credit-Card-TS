"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const process_1 = __importDefault(require("process"));
const { events } = require('./../constants/log');
// On server internal error.
const onServerError = () => console.error({ message: `Server error` });
// On server start.
const onListen = (port) => {
    console.info(`Server ᕕ(ಠ‿ಠ)ᕗ - 1.0`);
    console.info(`Card microservice: - Running on port: ${port}`);
};
// When the process receive kill signal.
const onProcessKill = (server) => {
    console.info(events.info.onProcessKillMessage);
    setTimeout(() => {
        console.info(events.info.finishServer);
        server.close(() => process_1.default.exit(0));
    }, 180);
};
// When in the server happen a uncaugth exception.
const onException = (err) => console.error({ message: err });
module.exports = {
    onListen,
    onProcessKill,
    onServerError,
    onException,
};
