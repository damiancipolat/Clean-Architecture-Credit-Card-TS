"use strict";
const express_1 = require("express");
const controller_1 = require("../controller/");
const router = (0, express_1.Router)();
router.post('/', controller_1.request);
router.patch('/pause/:card_id', controller_1.pause);
router.patch('/enable/:card_id', controller_1.enable);
module.exports = router;
