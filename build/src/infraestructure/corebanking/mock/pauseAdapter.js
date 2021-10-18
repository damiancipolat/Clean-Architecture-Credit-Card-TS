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
//@ts-ignore
const axios_1 = __importDefault(require("axios"));
//Cargo las urls.
const mocks_1 = __importDefault(require("./mocks"));
//Process the card request.
const pauseCard = (carId, externalId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = mocks_1.default.pauseCard;
    console.log('> Request PUT', url);
    const headers = {
        'AppId': '',
        'DeviceId': '',
        'ExternalId': externalId
    };
    const response = yield axios_1.default.put(url, headers, {});
    return response.data;
});
exports.default = pauseCard;
