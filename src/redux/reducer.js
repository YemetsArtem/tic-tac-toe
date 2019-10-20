import { combineReducers } from 'redux'
import boardReducer, {moduleName as boardModule} from '../ducks/board'

export default combineReducers({  
    [boardModule]: boardReducer
})
