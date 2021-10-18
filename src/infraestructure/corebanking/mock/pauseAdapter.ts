import {
    configuration,
    TConfig
} from '../../config';

import {
    TCardResponse,
    opHeaders
} from '../types';

import {
    IPauseCard
} from '../interface';

//@ts-ignore
import axios from 'axios';

//Cargo las urls.
import urls from './mocks';

//Process the card request.
const pauseCard:IPauseCard = async (carId:string,externalId:string):Promise<TCardResponse>=>{    
    
    const url =urls.pauseCard;
    console.log('> Request PUT',url);

    const headers:opHeaders = {
        'AppId':'',
        'DeviceId':'',
        'ExternalId':externalId
    };

    const response = await axios.put(url,headers,{});

    return response.data as TCardResponse;
};

export default pauseCard;