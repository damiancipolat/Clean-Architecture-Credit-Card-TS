import {
    TCard
} from '../../../domain/card';

import {
    toEnum
} from '../../../domain/cardStatus';

import TClient from '../../../domain/client';
import TExternalCard from '../../../domain/externalCard';
import createDate from '../../../domain/value-objects/cardDateValue';

import {
    find as findClient
} from '../client/';

const parseCard = async (dataSet:any):Promise<TCard>=>{

    const client:TClient|null = await findClient(dataSet.client_id);

    const opExternal:TExternalCard={
        opCardHolderId:dataSet.op_cardholder_id,
        opCardId:dataSet.op_card_id,
        opAffinityId:dataSet.op_affinity_id,
        opIssuerId:dataSet.op_issuer_id
    };

    const card:TCard={
        id:dataSet.id,
        created_at:dataSet.created_at,
        reference:dataSet.reference,
        since:createDate(dataSet.since_date),
        until:createDate(dataSet.until_date),
        client,
        status:toEnum(dataSet.status),
        opExternal,
        icon:dataSet.icon
    };

    return card;
}

export {
    parseCard
};