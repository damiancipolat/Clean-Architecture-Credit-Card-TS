import {
    configuration,
    TConfig
} from '../../config';

import {
    TCardholderAccountResponse,
    TCardResponse,
    opHeaders
} from '../types';

import {
    ICardRequest
} from '../interface';

//@ts-ignore
import axios from 'axios';

//Cargo las urls.
import urls from './mocks';

//Load configuration from environment.
const envConfig:TConfig = configuration;

//Create the cardholder account.
const createCardHolder = async (externalId:string):Promise<any>=>{        

    const url = urls.createCardHolder;
    console.log('> Request POST',url);

    const headers:opHeaders = {
        'AppId':'',
        'DeviceId':'',
        'ExternalId':externalId
    };

    const response = await axios.post(url,headers,{});
    return response.data;

};

//Process the card request.
const createCard = async (cardHolderId:string,externalId:string):Promise<any>=>{    
    
    const url = urls.createCard;
    console.log('> Request POST',url);

    const headers:opHeaders = {
        'AppId':'',
        'DeviceId':'',
        'ExternalId':externalId
    };

    const response = await axios.post(url,headers,{});
    return response.data;
};

//Process the card request.
const requestCard:ICardRequest = async (externalId:string):Promise<any>=>{

    const cardHolder:TCardholderAccountResponse = await createCardHolder(externalId);
    const card:TCardResponse = await createCard(cardHolder.cardHolderAccount.id,externalId);

    return {card,cardHolder};

}

export {
    createCardHolder,
    createCard,
    requestCard
};