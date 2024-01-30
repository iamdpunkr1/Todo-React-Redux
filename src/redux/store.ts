import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from '@redux-devtools/extension';
import todoReducer from './todo/todoReducer';

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;