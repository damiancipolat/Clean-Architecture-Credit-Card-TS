"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const newClient = () => {
    const { Client } = require('pg');
    const { user, host, name, pass, port } = config_1.configuration.sqlDb;
    const client = new Client({
        user,
        host,
        database: name,
        password: pass,
        port,
    });
    return client;
};
exports.default = newClient;
