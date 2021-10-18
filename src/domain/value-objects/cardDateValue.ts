import {
    TCardDate
} from '../card';

/**
 * This is a value object creator.
 * @param {number} string, format YYYYMMDD
 * @returns {TCardDate}
 */
const create = (date:string):TCardDate=>{

    if (!((date.length==6)||(date.length==8)))
        throw new Error('Bad date format must be YYYYMMDD');

    return {
        month:date.substring(0,4),
        year:date.substring(4,6)
    };

}

export default create;