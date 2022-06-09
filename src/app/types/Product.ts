export type ProductType = {
    _id : string,
    cateProductId : any,
    name:string,
    price: number,
    status:number,
    sale_price:number,
    desc:string,
    image:string
}
export type ProductCreateType = {
    name?: string,
    price?: number,
    status?:number,
    sale_price?:number,
    desc?:string,
    image?:string,
    cateProductId?:string,
}
export type ProductCartType = {
    id : string,
    name:string,
    image:string,
    sale_price:number,
    price:number,
    value:number,
    cateProductId:any,
}