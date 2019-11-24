import { Client } from '../client/client';

export interface Order{
    OrderId:number,
    CreateAt:Date,
    UpdateAt:Date,
    Status:number,
    ClientId:number,
    Client:Client
}
