//Dependencies with typed
import { Request, Response, NextFunction } from 'express';

import pauseCore from '../../infraestructure/corebanking/mock/pauseAdapter';
import {find,update} from '../../infraestructure/repositories/card';
import pauseCard from '../../application/pauseCard';

const pause = async (req: Request, res:Response, next: NextFunction) => {

    try{

        const {
            externalId        
        } = req.body;
    
        const {
            card_id
        }=req.params;
    
        const result = await pauseCard(card_id,externalId,pauseCore,update,find);
        return res.status(200).json(result);

    } catch (error) {       
        next(error);
    }

}

export  default pause;