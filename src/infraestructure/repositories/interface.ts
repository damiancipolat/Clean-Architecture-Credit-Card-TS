interface ISave<T>{
    (card:T):Promise<T>
};

interface IFind<T>{
    (id:string):Promise<T|null>
};

interface IUpdate<T>{
    (card:T):Promise<T>
};

export {
    ISave,
    IFind,
    IUpdate
};