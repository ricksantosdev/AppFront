import { Price } from './price';

export interface Product{
    id:number,
    name:string,
    createAt:Date,
    updateAt:Date,
    status:number,
    price:Price
}