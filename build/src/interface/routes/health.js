"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const health_1 = __importDefault(require("../controller/health"));
const router = (0, express_1.Router)();
// Bind routes with controller.
router.get('/ready', health_1.default);
router.get('/live', health_1.default);
router.get('/', health_1.default);
module.exports = router;
