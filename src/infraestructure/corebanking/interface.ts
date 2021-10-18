import {
    TCardResponse
} from './types';

interface ICardRequest{
    (externalId:string):Promise<any>
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