import { isEqual, intersection } from 'lodash'

function calculateWinner(playerX, playerO) {
    let winner = null;
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

    winnerPatterns.forEach((pattern) => {
        if (isEqual(pattern, intersection(playerX, pattern))) return winner = "Winner - X";
        if (isEqual(pattern, intersection(playerO, pattern))) return winner = "Winner - O";
    });

    console.log(winner);
    
    return winner ? winner : null;
}


export default calculateWinner;