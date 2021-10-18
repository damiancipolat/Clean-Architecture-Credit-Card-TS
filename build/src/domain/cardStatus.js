"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.toEnum = exports.TCardStatus = void 0;
var TCardStatus;
(function (TCardStatus) {
    TCardStatus[TCardStatus["created"] = 1] = "created";
    TCardStatus[TCardStatus["active"] = 2] = "active";
    TCardStatus[TCardStatus["paused"] = 3] = "paused";
    TCardStatus[TCardStatus["cancelated"] = 4] = "cancelated";
    TCardStatus[TCardStatus["pending"] = 5] = "pending";
})(TCardStatus || (TCardStatus = {}));
exports.TCardStatus = TCardStatus;
;
const toEnum = (status) => {
    switch (status) {
        case '1':
            return TCardStatus.created;
        case '2':
            return TCardStatus.active;
        case '3':
            return TCardStatus.paused;
        case '4':
            return TCardStatus.cancelated;
        case '5':
            return TCardStatus.pending;
        default:
            return TCardStatus.pending;
    }
};
exports.toEnum = toEnum;
const toString = (status) => {
    switch (status) {
        case TCardStatus.created:
            return '1';
        case TCardStatus.active:
            return '2';
        case TCardStatus.paused:
            return '3';
        case TCardStatus.cancelated:
            return '4';
        case TCardStatus.pending:
            return '5';
        default:
            return '0';
    }
};
exports.toString = toString;
