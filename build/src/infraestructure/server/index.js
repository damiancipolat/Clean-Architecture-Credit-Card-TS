"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const events_1 = __importDefault(require("./events"));
const config_1 = require("../config/");
// Define routes and events
const routes = require('../../interface/routes/');
//Load config.
const { server: { port } } = config_1.configuration;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// middleware base 
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Bind routes.
app.use('/', routes);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    events_1.default.onListen(port);
}));
// Define server "special" event to handle situations.
server.on('error', events_1.default.onServerError);
process.on('SIGINT', () => events_1.default.onProcessKill(server));
process.on('SIGTERM', () => events_1.default.onProcessKill(server));
process.on('unhandledRejection', events_1.default.onException);
process.on('uncaughtException', (err) => events_1.default.onException(err));
