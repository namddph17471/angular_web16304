export type Product = {
    _id : string,
    cateProductId : any,
    name:string,
    price: number,
    status:number,
    sale_price:number,
    desc:string,
    image:string
}
export type ProductCreate = {
    name?: string,
    price?: number,
    status?:number,
    sale_price?:number,
    desc?:string,
    image?:string
}
export type ProductCart = {
    id : string,
    name:string,
    value:number
}