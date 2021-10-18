"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a value object creator.
 * @param {number} string, format YYYYMMDD
 * @returns {TCardDate}
 */
const createDate = (date) => {
    if (!((date.length == 6) || (date.length == 10)))
        throw new Error('Bad date format must be YYYY-MM-DD');
    return {
        month: date.substring(0, 4),
        year: date.substring(5, 7)
    };
};
exports.default = createDate;
