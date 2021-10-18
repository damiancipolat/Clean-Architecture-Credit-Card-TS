import {
    IFind
} from '../interface';

import TClient from '../../../domain/client';
import parseClient from './clientMapper';

import bd from '../../bd/';

const find:IFind<TClient>=async (id:string):Promise<TClient>=>{

    const conex = bd();
    await conex.connect();

    const res:any = await conex.query('SELECT * from clients where id=$1;', [id]);
    conex.end();

    if (!(res&&res.rows.length>0))
        throw new Error('Client not found:'+id);

    return parseClient(res.rows[0]);

}

export {
    find
};