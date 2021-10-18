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
exports.parseCard = void 0;
const cardStatus_1 = require("../../../domain/cardStatus");
const cardDateValue_1 = __importDefault(require("../../../domain/value-objects/cardDateValue"));
const client_1 = require("../client/");
const parseCard = (dataSet) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, client_1.find)(dataSet.client_id);
    const opExternal = {
        opCardHolderId: dataSet.op_cardholder_id,
        opCardId: dataSet.op_card_id,
        opAffinityId: dataSet.op_affinity_id,
        opIssuerId: dataSet.op_issuer_id
    };
    const card = {
        id: dataSet.id,
        created_at: dataSet.created_at,
        reference: dataSet.reference,
        since: (0, cardDateValue_1.default)(dataSet.since_date),
        until: (0, cardDateValue_1.default)(dataSet.until_date),
        client,
        status: (0, cardStatus_1.toEnum)(dataSet.status),
        opExternal,
        icon: dataSet.icon
    };
    return card;
});
exports.parseCard = parseCard;
