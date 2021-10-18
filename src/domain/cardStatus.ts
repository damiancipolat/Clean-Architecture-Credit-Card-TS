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

export {
    TCardStatus,
    toEnum
};