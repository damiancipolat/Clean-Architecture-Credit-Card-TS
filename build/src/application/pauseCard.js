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
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("../domain/card");
const pauseCard = (idcard, externalId, pauseCard, updateCard, find) => __awaiter(void 0, void 0, void 0, function* () {
    //Pause in core bankin.
    yield pauseCard(idcard, externalId);
    //Find the card in db.
    let card = yield find(idcard);
    //Change status.
    card.status = card_1.TCardStatus.paused;
    //Update in db.
    const updated = yield updateCard(card);
    return updated;
});
exports.default = pauseCard;
