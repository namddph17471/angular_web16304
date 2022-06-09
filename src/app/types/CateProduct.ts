export type CateProduct = {
    _id : string,
    name:string,
    image:string
    status:number,
}
export type CateProductCreate = {
    name?: string,
    image?:string
    status?:number,
}
