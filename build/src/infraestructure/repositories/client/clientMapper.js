"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseClient = (dataSet) => {
    return {
        clientId: dataSet.id,
        email: dataSet.email,
        name: dataSet.name,
        surname: dataSet.surname
    };
};
exports.default = parseClient;
