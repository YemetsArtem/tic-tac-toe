import React from 'react'
import { useSelector } from 'react-redux'
import { getSquares, getPlayer, chechWinner } from '../ducks/board'
import Square from './Square'

const Board = () => {
    const player = useSelector(state => getPlayer(state));
    const squares  = useSelector(state => getSquares(state));
    const winner = useSelector(state => chechWinner(state));

    return (
        <div className="board">
            {winner ? <h2>{winner}</h2> : <h2>Next player: {player}</h2>}
            <ul className="board">
                {
                    squares.map((square, i) =>
                        <Square key={i} id={i} squareContent={square}/>
                    )
                }
            </ul>
        </div>
    )
}

export default Board
