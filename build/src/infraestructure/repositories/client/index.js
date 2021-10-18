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
exports.find = void 0;
const clientMapper_1 = __importDefault(require("./clientMapper"));
const bd_1 = __importDefault(require("../../bd/"));
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const conex = (0, bd_1.default)();
    yield conex.connect();
    const res = yield conex.query('SELECT * from clients where id=$1;', [id]);
    conex.end();
    if (!(res && res.rows.length > 0))
        throw new Error('Client not found:' + id);
    return (0, clientMapper_1.default)(res.rows[0]);
});
exports.find = find;
