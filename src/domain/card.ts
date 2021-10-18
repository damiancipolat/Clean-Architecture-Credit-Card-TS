import TClient from './client';
import TExternalCard from './externalCard';

enum TCardStatus {
    created=1,
    active=2,
    paused=3,
    cancelated=4,
    pending=5
};

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