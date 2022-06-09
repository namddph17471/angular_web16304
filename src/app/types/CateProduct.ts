export type CateProductType = {
    _id : string,
    name:string,
    image:string
    status:number,
}
export type CateProductCreateType = {
    name?: string,
    image?:string
    status?:number,
}
