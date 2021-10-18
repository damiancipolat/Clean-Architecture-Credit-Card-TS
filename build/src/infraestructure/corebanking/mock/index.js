"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pauseCard = exports.activeCard = exports.requestCard = void 0;
const requestAdapter_1 = require("./requestAdapter");
Object.defineProperty(exports, "requestCard", { enumerable: true, get: function () { return requestAdapter_1.requestCard; } });
const activeAdapter_1 = __importDefault(require("./activeAdapter"));
exports.activeCard = activeAdapter_1.default;
const pauseAdapter_1 = __importDefault(require("./pauseAdapter"));
exports.pauseCard = pauseAdapter_1.default;
