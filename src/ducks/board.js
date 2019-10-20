import { Record } from 'immutable'
 
// Constants
export const moduleName = 'board';
<<<<<<< HEAD
export const FILL_SQUARE = `${ moduleName }/FILL_SQUARE`;

 
// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null)
=======
export const FILL_SQUARE = `${moduleName}/FILL_SQUARE`;
export const CHANGE_PLAYER = `${moduleName}/CHANGE_PLAYER`;

// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null),
    currentPlayer: "X"
>>>>>>> Add game logic
});
 
export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;
 
    switch (type) {
        case FILL_SQUARE:
<<<<<<< HEAD
            return 'newState';
=======
            return (
            !state.squares[payload.squareId]
                ? state
                    .setIn(['squares', payload.squareId], payload.currentPlayer )
                    .set("currentPlayer", state.currentPlayer === "X" ? "O" : "X")
                : state
            )
>>>>>>> Add game logic
 
        default:
            return state;
    }
}
 
// Actions Creators
<<<<<<< HEAD
export function fillSquare(index) {
    return {
        type: FILL_SQUARE,
        payload: { index }
    }
}
 
=======
export function fillSquare(squareId, currentPlayer) {
    return {
        type: FILL_SQUARE,
        payload: { squareId, currentPlayer }
    }
}

export function changePlayer() {
    return {
        type: CHANGE_PLAYER
    }
}


// Selectors
export const getSquares = state => state[moduleName].squares;
export const getPlayer = state => state[moduleName].currentPlayer;
>>>>>>> Add game logic
