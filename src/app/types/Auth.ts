export type TypeLoginRequest = {
    email:string
    password:string
};
export type TypeLoginResponse={
    accessToken : string,
    user :{
        _id:string
        email:string
        name:string
    }
}