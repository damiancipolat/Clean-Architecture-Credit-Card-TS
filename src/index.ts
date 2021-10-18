/*
import {
    pauseCard
} from './infraestructure/corebanking/pauseAdapter';

pauseCard('123154654564564','2222').then(a=>console.log(a));
*/

import {
    find,
    save,
    update
} from './infraestructure/repositories/card/';

import {TCard} from './domain/card';

const test = async()=>{

    let card:TCard = await find('2');
    card.icon='MATRIX';
    card.reference='9999';

    const result = await update(card);    
    //const result = await save(card);

    console.log('--->',result);

}

test();