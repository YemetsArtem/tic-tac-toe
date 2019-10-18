import { combineReducers } from 'redux'
import playersReducer, {moduleName as playersModule} from '../ducks/players'

export default combineReducers({  [playersModule]: playersReducer })