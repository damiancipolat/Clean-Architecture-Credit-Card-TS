//Include core banking.
import {
    IActiveCard
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

const activeCard = async (idcard:string,externalId:string,activeCard:IActiveCard,updateCard:IUpdate<TCard>,find:IFind<TCard>)=>{

  //Pause in core bankin.
  await activeCard(idcard,externalId);

  //Find the card in db.
  let card:TCard = await find(idcard);
  
  //Change status.
  card.status=TCardStatus.active;

  //Update in db.
  const updated:any = await updateCard(card);

  return updated;

}

export default activeCard;