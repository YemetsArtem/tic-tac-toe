import { createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from "./reducer"
import calculateWinner from '../middlewares/calculateWinner';

const store = createStore(reducer, applyMiddleware(logger, calculateWinner));
window.store = store;

export default store;

