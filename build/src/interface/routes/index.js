"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const health_1 = __importDefault(require("./health"));
const card_1 = __importDefault(require("./card"));
const router = (0, express_1.Router)();
router.use('/health', health_1.default);
router.use('/card', card_1.default);
module.exports = router;
