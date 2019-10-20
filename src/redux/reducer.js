import { combineReducers } from 'redux'
<<<<<<< HEAD
import playersReducer, {moduleName as playersModule} from '../ducks/players'

export default combineReducers({  [playersModule]: playersReducer })
=======
import boardReducer, {moduleName as boardModule} from '../ducks/board'

export default combineReducers({  
    [boardModule]: boardReducer
})
>>>>>>> Add game logic
