import React from 'react'
import { useSelector } from 'react-redux'
import { getSquares } from '../ducks/game'
import Square from './Square'

const Board = () => {
    const squares = useSelector(state => getSquares(state));

    return (
        <div className="board">
            Board
            <ul className="board">
                {
                    squares.map((square, i) =>
                        <Square key={i} id={i} squareContent={square} />
                    )
                }
            </ul>
        </div>
    )
}

export default Board
