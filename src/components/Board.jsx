import React from 'react'
import { useSelector } from 'react-redux'
import { getSquares, getPlayer } from '../ducks/board'
import Square from './Square'

const Board = () => {
    const player = useSelector(state => getPlayer(state));
    const squares  = useSelector(state => getSquares(state));

    return (
        <div className="board">
            Next player: {player}
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
