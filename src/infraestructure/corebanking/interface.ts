import {
    TCardholderAccountResponse,
    TCardResponse,
} from './types';

interface ICardRequest{
    (externalId:string):Promise<[TCardResponse,TCardholderAccountResponse]>
};

interface IPauseCard{
    (carId:string,externalId:string):Promise<TCardResponse>
};

interface IActiveCard{
    (carId:string,externalId:string):Promise<TCardResponse>
};

export {
    ICardRequest,
    IPauseCard,
    IActiveCard
};