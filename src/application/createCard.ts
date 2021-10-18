//Include core banking.
import {
    ICardRequest
} from '../infraestructure/corebanking/interface';

import {
    TCardholderAccountResponse,
    TCardResponse,
} from '../infraestructure/corebanking/types';

import {TCard} from '../domain/card';
import createDate from '../domain/value-objects/cardDateValue';
import TExternalCard from '../domain/externalCard';
import TClient from '../domain/client';
import {TCardStatus} from '../domain/cardStatus';

//Include repository.
import {
    ISave,
    IFind
} from '../infraestructure/repositories/interface';

const buildCard = (cardData:[TCardResponse,TCardholderAccountResponse],client:TClient,icon:string):TCard=>{

    //Parse values.
    const card:any=cardData[0].card;
    const cardholder:any=cardData[1].cardHolderAccount;

    //Parse external data.
    const external:TExternalCard={
        opCardHolderId:cardholder.id,
        opCardId:card.id,
        opAffinityId:'1234',
        opIssuerId:'1234'
    };

    //Pars card.
    const newCard:TCard={
        created_at:new Date().toISOString().slice(0, 10),
        reference:card.reference,
        since:createDate(card.since),
        until:createDate(card.until),
        client,
        status:TCardStatus.active,
        opExternal:external,
        icon
    };

    return newCard;

}

const requestCard = async (externalId:string,icon:string,requestCard:ICardRequest,saveCard:ISave<TCard>,find:IFind<TClient>)=>{

    //Request the card in the core banking.    
    const creation:[TCardResponse,TCardholderAccountResponse] = await requestCard(externalId);

    //Find the client.
    const client:TClient = await find(externalId);

    //Parse the card.
    const newCard:TCard= buildCard(creation,client,icon);

    //Record the card.
    return await saveCard(newCard);

}

export default requestCard;