import { Record, OrderedSet } from 'immutable'
import calculateWinner from '../middlewares/calculateWinner';

// Constants
export const moduleName = 'board';
export const FILL_SQUARE = `${moduleName}/FILL_SQUARE`;

// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null),
    currentPlayer: "X",
    playerX: new OrderedSet([]),
    playerO: new OrderedSet([]),
});

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;

    switch (type) {
        case FILL_SQUARE:
            return (
                !state.squares[payload.squareId]
                    ? state
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
export const getState = state => state[moduleName];
export const getSquares = state => getState(state).squares;
export const getPlayer = state => getState(state).currentPlayer;
export const chechWinner = state => calculateWinner(
    getState(state).playerX, 
    getState(state).playerO
);
