import {
    TCardDate
} from '../card';

/**
 * This is a value object creator.
 * @param {number} string, format YYYYMMDD
 * @returns {TCardDate}
 */
const createDate = (date:string):TCardDate=>{

    if (!((date.length==6)||(date.length==10)))
        throw new Error('Bad date format must be YYYY-MM-DD');

    return {
        month:date.substring(0,4),
        year:date.substring(5,7)
    };

}

export default createDate;