import TClient from '../../../domain/client';

const parseClient = (dataSet:any):TClient=>{
    
    return {
        clientId:dataSet.id,
        email:dataSet.email,
        name:dataSet.name,
        surname:dataSet.surname
    };

}

export default parseClient;