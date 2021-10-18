//Include core banking.
import {
    ICardRequest
} from '../infraestructure/corebanking/interface';

import {
    TCard
} from '../domain/card';

//Include repository.
import {
    ISave,
    IFind
} from '../infraestructure/repositories/interface';
        
const requestCard = async (externalId:string,requestCard:ICardRequest,saveCard:ISave<TCard>,find:IFind<TCard>)=>{

    const cardResult = await requestCard(externalId);
    console.log('result card creation',cardResult);

    return cardResult;

}

export default requestCard;