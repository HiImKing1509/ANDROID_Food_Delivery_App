import {combineReducers, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import foodReducer from './reducers';

const reducer = {food: foodReducer};

export const Store = configureStore({
  reducer,
  middleware: thunk,
});
