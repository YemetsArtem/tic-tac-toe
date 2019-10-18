import { Record } from 'immutable'


// Constants
export const moduleName = 'players';
export const CHANGE_PLAYER = `${moduleName}/CHANGE_PLAYER`;
export const FIIL_SQUARE = `${moduleName}/FIIL_SQUARE`;

// Reducer
const ReducerRecord = Record({
    currentPlayer: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const { type } = action;

    switch (type) {
        case CHANGE_PLAYER:
            return state.set(
                    "currentPlayer",
                    state.currentPlayer === "X" ? "O" : "X"
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


// Selectors
export const getPlayer = state => state[moduleName].currentPlayer;