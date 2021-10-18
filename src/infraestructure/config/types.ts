type TEnv = string | undefined;

type TConfigServer ={
    port: TEnv
    killTimeout: TEnv
};

type TConfigDatabase ={
    user: TEnv,
    host: TEnv,
    port: TEnv,
    pass: TEnv,
    name: TEnv,
    type: TEnv
};

type TConfigCoreBanking = {
    url:TEnv,
    deviceId:TEnv,
    appId:TEnv
};

type TConfig = {
    server:TConfigServer,
    sqlDb:TConfigDatabase,
    coreBanking:TConfigCoreBanking
};

export {
    TConfigDatabase,
    TConfigServer,
    TConfig,
    TConfigCoreBanking
};