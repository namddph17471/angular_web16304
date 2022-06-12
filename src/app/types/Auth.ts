export type TypeLoginRequest = {
    email:string
    password:string
};
export type TypeResgiterRequest = {
    email:string,
    name:string,
    password:string,
};
export type TypeLoginResponse={
    token : string,
    user :{
        _id:string,
        email:string,
        name:string,
        role:number
    }
}
export type TypeResgiterResponse={
    user :{
        _id:string,
        email:string,
        name:string,
        role:number
    }
}
export type UserType = {
    _id:string,
    email:string,
    name:string,
    role:number,
    status:number
}
export type UserUpdateType = {
    email?:string,
    name?:string,
    role?:number,
    status?:number
}