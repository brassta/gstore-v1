// import { createSelector } from 'reselect';

import { State } from './state';

export const GetCurrentProductMap = (product:State)=>{
    return product.allProducts
}