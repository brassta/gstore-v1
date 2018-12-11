import {createAction} from 'src/utilities/redux';

import {ActionMap, ActionTypes} from './actions';

/**
 * branko - gn store:
 */

export const fetchProducts = () =>
    createAction<ActionMap, ActionTypes.FetchProducts>(ActionTypes.FetchProducts)(
        {}
    );

export const fetchCurrentProductsError = () =>
    createAction<ActionMap, ActionTypes.FetchCurrentProductsError>(ActionTypes.FetchCurrentProductsError)(
        {}
    );