import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';


const enhancer = applyMiddleware(routerMiddleware(browserHistory), thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
