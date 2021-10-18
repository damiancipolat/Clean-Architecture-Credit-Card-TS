//Include core banking.
import {
    IPauseCard
} from '../infraestructure/corebanking/interface';

import {
    TCard,
    TCardStatus
} from '../domain/card';

//Include repository.
import {
    IUpdate,
    IFind
} from '../infraestructure/repositories/interface';

const pauseCard = async (idcard:string,externalId:string,pauseCard:IPauseCard,updateCard:IUpdate<TCard>,find:IFind<TCard>)=>{

  //Pause in core bankin.
  await pauseCard(idcard,externalId);

  //Find the card in db.
  let card:TCard = await find(idcard);
  
  //Change status.
  card.status=TCardStatus.paused;

  //Update in db.
  const updated:any = await updateCard(card);

  return updated;

}

export default pauseCard;