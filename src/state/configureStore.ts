import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { ActionObject } from 'src/utilities/redux';

import { State } from './state';
import rootReducer from './reducer';
import rootSaga from './saga';
import { ActionMap, ActionTypes } from './actions';

export default () => {
  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeWithDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers);

  const composedReducer = connectRouter(history)(rootReducer);

  const store = createStore<
    State,
    ActionObject<ActionMap, ActionTypes>,
    {},
    {}
  >(composedReducer, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return {
    store,
    history,
  };
};
