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
const cardDateValue_1 = __importDefault(require("../domain/value-objects/cardDateValue"));
const cardStatus_1 = require("../domain/cardStatus");
const buildCard = (cardData, client, icon) => {
    //Parse values.
    const card = cardData[0].card;
    const cardholder = cardData[1].cardHolderAccount;
    //Parse external data.
    const external = {
        opCardHolderId: cardholder.id,
        opCardId: card.id,
        opAffinityId: '1234',
        opIssuerId: '1234'
    };
    //Pars card.
    const newCard = {
        created_at: new Date().toISOString().slice(0, 10),
        reference: card.reference,
        since: (0, cardDateValue_1.default)(card.since),
        until: (0, cardDateValue_1.default)(card.until),
        client,
        status: cardStatus_1.TCardStatus.active,
        opExternal: external,
        icon
    };
    return newCard;
};
const requestCard = (externalId, icon, requestCard, saveCard, find) => __awaiter(void 0, void 0, void 0, function* () {
    //Request the card in the core banking.    
    const creation = yield requestCard(externalId);
    //Find the client.
    const client = yield find(externalId);
    //Parse the card.
    const newCard = buildCard(creation, client, icon);
    //Record the card.
    return yield saveCard(newCard);
});
exports.default = requestCard;
