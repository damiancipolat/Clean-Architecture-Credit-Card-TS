"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
//Include dot env as env var launcher.
const dotenv_1 = require("dotenv");
//Load variables.
(0, dotenv_1.config)();
const configuration = {
    server: {
        port: process.env.SERVER_PORT,
        killTimeout: process.env.SERVER_KILLTIMEOUT
    },
    sqlDb: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
        type: process.env.DB_TYPE
    },
    coreBanking: {
        url: process.env.OPENPASS_URL,
        deviceId: process.env.OPENPASS_DEVICE_ID,
        appId: process.env.OPENPASS_APP_ID
    }
};
exports.configuration = configuration;
