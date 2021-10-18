import {
    configuration
} from '../config';

const newClient = ()=>{

    const {
        Client 
    } = require('pg');

    const {
        user,
        host,
        name,
        pass,
        port
    } = configuration.sqlDb;

    const client = new Client({
        user,
        host,
        database: name,
        password: pass,
        port,
    });

    return client;

}

export default newClient;