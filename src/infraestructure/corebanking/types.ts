type opHeaders = {
    AppId:string
    DeviceId:string,
    ExternalId:string
}

type TCardholderAccountResponse={
    cardHolderAccount: {
        id: string,
        status: string,
        creation_date: string,
        provider: string
    }
};

type TCardResponse={
    card:{
        id:string,
        reference:string,
        since:string,
        until:string,
        brand:string,
        line:string,
        status:string,
        creation_date:string,
        provider:string,
    }
};

export {
    TCardholderAccountResponse,
    TCardResponse,
    opHeaders
};