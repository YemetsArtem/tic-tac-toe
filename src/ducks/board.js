import { Record } from 'immutable'
 
// Constants
export const moduleName = 'board';
export const FILL_SQUARE = `${moduleName}/FILL_SQUARE`;
export const CHANGE_PLAYER = `${moduleName}/CHANGE_PLAYER`;

// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null),
    currentPlayer: "X"
});
 
export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;
 
    switch (type) {
        case FILL_SQUARE:
            return (
            !state.squares[payload.squareId]
                ? state
                    .setIn(['squares', payload.squareId], payload.currentPlayer )
                    .set("currentPlayer", state.currentPlayer === "X" ? "O" : "X")
                : state
            )
 
        default:
            return state;
    }
}
 
// Actions Creators
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
