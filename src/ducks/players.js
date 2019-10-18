import { Record } from 'immutable'


// Constants
export const moduleName = 'players';
export const CHANGE_PLAYER = `${moduleName}/CHANGE_PLAYER`;
export const FIIL_SQUARE = `${moduleName}/FIIL_SQUARE`;

// Reducer
const ReducerRecord = Record({
    currentPlayer: null,
    playerX: null,
    playerY: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_PLAYER:
            return state.set(
                    "currentPlayer",
                    state.currentPlayer === "X" ? "O" : "X"
                )
        
        case FIIL_SQUARE:
            return state.updateIn(
                payload.player,
                arr => arr.push(payload.squareIndex)
            )        

        default:
            return state;
    }
}

// Actions Creators
export function changePlayer() {
    return {
        type: CHANGE_PLAYER
    }
}

export function fillSquare(player, squareIndex) {
    return {
        type: CHANGE_PLAYER,
        payload: { player, squareIndex }
    }
}

// Selectors
export const getPlayer = state => state[moduleName].currentPlayer;