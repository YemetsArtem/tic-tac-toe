import { combineReducers } from 'redux'
import boardReducer, {moduleName as boardModule} from '../ducks/game'

export default combineReducers({  
    [boardModule]: boardReducer
})
