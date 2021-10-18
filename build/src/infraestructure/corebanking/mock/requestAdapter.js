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
exports.requestCard = exports.createCard = exports.createCardHolder = void 0;
const config_1 = require("../../config");
//@ts-ignore
const axios_1 = __importDefault(require("axios"));
//Cargo las urls.
const mocks_1 = __importDefault(require("./mocks"));
//Load configuration from environment.
const envConfig = config_1.configuration;
//Create the cardholder account.
const createCardHolder = (externalId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = mocks_1.default.createCardHolder;
    console.log('> Request POST', url);
    const headers = {
        'AppId': '',
        'DeviceId': '',
        'ExternalId': externalId
    };
    const response = yield axios_1.default.post(url, headers, {});
    return response.data;
});
exports.createCardHolder = createCardHolder;
//Process the card request.
const createCard = (cardHolderId, externalId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = mocks_1.default.createCard;
    console.log('> Request POST', url);
    const headers = {
        'AppId': '',
        'DeviceId': '',
        'ExternalId': externalId
    };
    const response = yield axios_1.default.post(url, headers, {});
    return response.data;
});
exports.createCard = createCard;
//Process the card request.
const requestCard = (externalId) => __awaiter(void 0, void 0, void 0, function* () {
    const cardHolder = yield createCardHolder(externalId);
    console.log('> Cardholder response', cardHolder);
    const card = yield createCard(cardHolder.cardHolderAccount.id, externalId);
    console.log('> Card response', card);
    return [card, cardHolder];
});
exports.requestCard = requestCard;
