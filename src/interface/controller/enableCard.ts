//Dependencies with typed
import { Request, Response, NextFunction } from 'express';

import activeCore from '../../infraestructure/corebanking/mock/activeAdapter';
import {find,update} from '../../infraestructure/repositories/card';
import activeCard from '../../application/activeCard';

const enable = async (req: Request, res:Response, next: NextFunction) => {

    try{

        const {
            externalId        
        } = req.body;
    
        const {
            card_id
        }=req.params;
    
        const result = await activeCard(card_id,externalId,activeCore,update,find);
        return res.status(200).json(result);

    } catch (error) {       
        next(error);
    }

}

export  default enable;