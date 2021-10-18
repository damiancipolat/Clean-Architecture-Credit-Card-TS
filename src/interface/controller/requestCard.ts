//Dependencies with typed
import { Request, Response, NextFunction } from 'express';

//Include core banking.
import {requestCard} from '../../infraestructure/corebanking/mock/';

//Include repository.
import {
    save
} from '../../infraestructure/repositories/card/';

import {    
    find
} from '../../infraestructure/repositories/client';

import requestCardApp from '../../application/createCard';

const create = async (req: Request, res:Response, next: NextFunction) => {

    try{

        const {
            externalId,
            icon
        } = req.body;

        const creation = await requestCardApp(externalId,icon,requestCard,save,find);
        return res.status(201).json(creation);

    } catch (error) {       
        next(error);
    }

}

export default create;