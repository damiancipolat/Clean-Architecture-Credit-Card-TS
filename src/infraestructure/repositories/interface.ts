interface ISave<T>{
    (entity:T):Promise<T>
};

interface IFind<T>{
    (id:string):Promise<T>
};

interface IUpdate<T>{
    (entity:T):Promise<T>
};

export {
    ISave,
    IFind,
    IUpdate
};