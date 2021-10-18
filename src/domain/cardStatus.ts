enum TCardStatus {
    created=1,
    active=2,
    paused=3,
    cancelated=4,
    pending=5
};

const toEnum = (status:string):TCardStatus=>{

    switch(status){
        case '1':
            return TCardStatus.created;        
        case '2':
            return TCardStatus.active;
        case '3':
            return TCardStatus.paused;
        case '4':
            return TCardStatus.cancelated;
        case '5':
            return TCardStatus.pending;
        default:
            return TCardStatus.pending;
    }

}

const toString = (status:TCardStatus):string=>{

    switch(status){
        case TCardStatus.created:
            return '1';
        case TCardStatus.active:
            return '2';
        case TCardStatus.paused:
            return '3';
        case TCardStatus.cancelated:
            return '4';
        case TCardStatus.pending:
            return '5';
        default:
            return '0';
    }

}

export {
    TCardStatus,
    toEnum,
    toString
};