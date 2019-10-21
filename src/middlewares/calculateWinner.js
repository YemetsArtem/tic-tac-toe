import { isEqual, isEmpty } from 'lodash'

function calculateWinner({ getState }) {
    return next => action => {
        const playerX = getState().board.playerX.toJS().sort();
        const playerO = getState().board.playerO.toJS().sort();
        let winner;
        
        const winnerPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        console.log(playerX.includes(...winnerPatterns[0]));
        
        winnerPatterns.forEach((pattern) => {
            if (isEqual(pattern, playerX)) return winner = "Winner - X";
            if (isEqual(pattern, playerO)) return winner = "Winner - O";
        });

        winner ? next({ ...action,  winner: winner }) : next(action);
    }
}

export default calculateWinner;