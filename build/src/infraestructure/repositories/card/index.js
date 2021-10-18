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
exports.update = exports.save = exports.find = void 0;
const cardStatus_1 = require("../../../domain/cardStatus");
const cardMapper_1 = require("./cardMapper");
const bd_1 = __importDefault(require("../../bd/"));
const save = (entity) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const conex = (0, bd_1.default)();
    yield conex.connect();
    const sql = `insert into biz_cards(created_at,reference,since_date,until_date,client_id,status,icon,op_cardholder_id,op_card_id,op_affinity_id,op_issuer_id)
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)  RETURNING *;`;
    const values = [
        entity.created_at,
        entity.reference,
        entity.since.month + '-' + entity.since.year,
        entity.until.month + '-' + entity.until.year,
        (_a = entity.client) === null || _a === void 0 ? void 0 : _a.clientId,
        (0, cardStatus_1.toString)(entity.status),
        entity.icon,
        entity.opExternal.opCardHolderId,
        entity.opExternal.opCardId,
        entity.opExternal.opAffinityId,
        entity.opExternal.opIssuerId
    ];
    const res = yield conex.query(sql, values);
    conex.end();
    return res.rows[0];
});
exports.save = save;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const conex = (0, bd_1.default)();
    yield conex.connect();
    const res = yield conex.query('SELECT * from biz_cards where id=$1;', [id]);
    conex.end();
    if (!(res && res.rows.length > 0))
        throw new Error('Card not found');
    return yield (0, cardMapper_1.parseCard)(res.rows[0]);
});
exports.find = find;
const update = (entity) => __awaiter(void 0, void 0, void 0, function* () {
    const conex = (0, bd_1.default)();
    yield conex.connect();
    const sql = `update biz_cards set reference=$2, icon=$3, status= $4 where id=$1 RETURNING *;`;
    const values = [
        entity.id,
        entity.reference,
        entity.icon,
        (0, cardStatus_1.toString)(entity.status)
    ];
    const res = yield conex.query(sql, values);
    conex.end();
    return res.rows[0];
});
exports.update = update;
