export type Product = {
    _id : string,
    name:string,
    price: number,
    status:number
}
export type ProductCreate = {
    name?: string,
    price?: number,
    status?:number
}
export type ProductCart = {
    id : string,
    name:string,
    value:number
}