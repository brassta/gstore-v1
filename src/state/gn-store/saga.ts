// import {all, put, takeLatest, takeEvery, select} from 'redux-saga/effects';
import {put} from 'redux-saga/effects';
// import {delay} from 'redux-saga';
// @ts-ignore
import jwtDecode from 'jwt-decode';

import http from 'src/services/http';

import {mapResponseToProduct} from 'src/utilities/mapper';
// import {ActionObject} from 'src/utilities/redux';
// import {Product} from 'src/types';
// import {hideModal, showModal, fetchGoldBalance} from 'src/state/actions';

// import {getCurrentProductMap} from 'src/state/selectors';
// import {Modals} from 'src/constants';

import * as actions from './actionCreators';
// import {ActionTypes, ActionMap} from './actions';

function* fetchProducts() {
    try {
        const [productsResponseId, productResponseName] = yield  Promise.all(['id', 'name'].map((status) => {
            return http.get(`/products`, {status})
        }));

        const products =[...productsResponseId, ...productResponseName].map(mapResponseToProduct);
        return products;
    }
    catch{
        yield put(actions.fetchCurrentProductsError());
    }
}