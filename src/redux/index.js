import { createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from "./reducer"

const store = createStore(reducer, applyMiddleware(logger));
window.store = store;

export default store;

