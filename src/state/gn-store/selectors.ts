// import { createSelector } from 'reselect';

import { State } from './state';

export const getAllProducts = (product:State)=>{
    return product.allProducts
}