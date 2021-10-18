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
const activeAdapter_1 = __importDefault(require("../../infraestructure/corebanking/mock/activeAdapter"));
const card_1 = require("../../infraestructure/repositories/card");
const activeCard_1 = __importDefault(require("../../application/activeCard"));
const enable = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { externalId } = req.body;
        const { card_id } = req.params;
        const result = yield (0, activeCard_1.default)(card_id, externalId, activeAdapter_1.default, card_1.update, card_1.find);
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.default = enable;
