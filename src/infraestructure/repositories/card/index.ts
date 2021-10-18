import {
    ISave,
    IFind,
    IUpdate
} from '../interface';

import {    
    TCard
} from '../../../domain/card';

import {
    toString
} from '../../../domain/cardStatus';

import {
    parseCard
} from './cardMapper';

import bd from '../../bd/';

const save:ISave<TCard>=async (entity:TCard):Promise<TCard>=>{

    const conex = bd();
    await conex.connect();

    const sql =`insert into biz_cards(created_at,reference,since_date,until_date,client_id,status,icon,op_cardholder_id,op_card_id,op_affinity_id,op_issuer_id)
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)  RETURNING *;`;

    const values = [
        entity.created_at,
        entity.reference,
        entity.since.month+'-'+entity.since.year,
        entity.until.month+'-'+entity.until.year,
        entity.client?.clientId,
        toString(entity.status),
        entity.icon,
        entity.opExternal.opCardHolderId,
        entity.opExternal.opCardId,
        entity.opExternal.opAffinityId,
        entity.opExternal.opIssuerId
    ];

    const res:any = await conex.query(sql,values);
    conex.end();

    return res.rows[0];

}

const find:IFind<TCard>=async (id:string):Promise<TCard>=>{

    const conex = bd();
    await conex.connect();

    const res:any = await conex.query('SELECT * from biz_cards where id=$1;', [id]);
    conex.end();

    if (!(res&&res.rows.length>0))
        throw new Error('Card not found');

    return await parseCard(res.rows[0]);

}

const update:IUpdate<TCard>=async (entity:TCard):Promise<TCard>=>{

    const conex = bd();
    await conex.connect();

    const sql =`update biz_cards set reference=$2, icon=$3, status= $4 where id=$1 RETURNING *;`;
    
    const values = [
        entity.id,
        entity.reference,
        entity.icon,
        toString(entity.status)
    ];

    const res:any = await conex.query(sql,values);
    conex.end();

    return res.rows[0];
}

export {
    find,
    save,
    update
};