import {
    ISave,
    IFind,
    IUpdate
} from '../interface';

import {    
    TCard
} from '../../../domain/card';

import {
    parseCard
} from './cardMapper';

import bd from '../../bd/';
/*
const save:ISave<TCard>=async (card:TCard):Promise<TCard>=>{

    const conex = bd();
    await conex.connect();

    let a:TCard;
    return Promise.resolve(a);
}*/

const find:IFind<TCard>=async (id:string):Promise<TCard|null>=>{

    const conex = bd();
    await conex.connect();

    const res:any = await conex.query('SELECT * from biz_cards where id=$1;', [id]);
    conex.end();

    return (res&&res.rows.length>0)?parseCard(res[0]):null;

}

const update:IUpdate<TCard>=async (card:TCard):Promise<TCard>=>{

    let a:TCard;
    return Promise.resolve(a);
}

export {
    save,
    find,
    update
};