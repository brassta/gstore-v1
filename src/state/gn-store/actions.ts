// import { GNSstore } from 'src/types';

export enum ActionTypes {
    FetchProducts = '[Product] Fetch Products',
    FetchCurrentProductsError = '[Product] Fetch Current Product Error'
}

export interface ActionMap {
    [ActionTypes.FetchProducts]:{}
    [ActionTypes.FetchCurrentProductsError]:{}
}