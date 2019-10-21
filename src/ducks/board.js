import { Record, OrderedSet } from 'immutable'

// Constants
export const moduleName = 'board';
export const FILL_SQUARE = `${moduleName}/FILL_SQUARE`;

// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null),
    currentPlayer: "X",
    playerX: new OrderedSet([]),
    playerO: new OrderedSet([]),
    winner: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload, winner } = action;

    switch (type) {
        case FILL_SQUARE:
            return (
                !state.squares[payload.squareId]
                    ? state
                        .set("winner", winner ? winner : null)
                        .setIn(['squares', payload.squareId], payload.currentPlayer)
                        .update(`player${payload.currentPlayer}`, player => player.add(payload.squareId))
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



// Selectors
export const getSquares = state => state[moduleName].squares;
export const getPlayer = state => state[moduleName].currentPlayer;
export const chechWinner = state => state[moduleName].winner;

