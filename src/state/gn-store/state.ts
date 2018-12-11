import {Product} from "src/types";

export interface State {
    id:string,
    allProducts: Product[],
    fetchProductsInProgress: boolean
}

export const initialState:State ={
    allProducts:[],
    id:'',
    fetchProductsInProgress: false
}