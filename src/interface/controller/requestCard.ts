//Dependencies with typed
import { Request, Response, NextFunction } from 'express';

const create = async (req: Request, res:Response, next: NextFunction) => {

    try{
        return res.status(201).json(1)

    } catch (error) {       
        next(error);
    }

}

export default create;