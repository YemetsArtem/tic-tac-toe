import { Record, OrderedSet } from 'immutable'
import calculateWinner from '../middlewares/calculateWinner';

// Constants
export const moduleName = 'board';
export const FILL_SQUARE = `${moduleName}/FILL_SQUARE`;
export const DETERMINE_WINNER = `${moduleName}/DETERMINE_WINNER`;

// Reducer
const ReducerRecord = Record({
    squares: Array(9).fill(null),
    currentPlayer: "X",
    playerX: new OrderedSet([]),
    playerO: new OrderedSet([]),
    winner: null
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

        case DETERMINE_WINNER:
            return state.set("winner", calculateWinner(state.playerX, state.playerO))

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

export function determineWinner() {
    return {
        type: DETERMINE_WINNER
    }
}

// Selectors
export const getState = state => state[moduleName];
export const getSquares = state => getState(state).squares;
export const getPlayer = state => getState(state).currentPlayer;
export const getWinner = state => getState(state).winner;
