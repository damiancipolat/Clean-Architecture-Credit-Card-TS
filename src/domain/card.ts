import TClient from './client';
import TExternalCard from './externalCard';

import {
    TCardStatus
} from './cardStatus';

type TCardDate={
    month:string;
    year:string;
};

type TCard={
    id:string;
    created_at:string;
    reference:string;
    since:TCardDate;
    until:TCardDate;
    client:TClient|null;
    status:TCardStatus;
    opExternal:TExternalCard;
    icon:string
};

export {
    TCard,
    TCardDate,
    TCardStatus
};