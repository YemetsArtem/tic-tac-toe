import React from 'react'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { getPlayer } from '../ducks/players'
import Square from './Square'

const Board = ({ squares }) => {
    const player = useSelector(state => getPlayer(state));
=======
import { getSquares, getPlayer } from '../ducks/board'
import Square from './Square'

const Board = () => {
    const player = useSelector(state => getPlayer(state));
    const squares  = useSelector(state => getSquares(state));
>>>>>>> Add game logic

    return (
        <div className="board">
            Next player: {player}
            <ul className="board">
                {
<<<<<<< HEAD
                    squares.map(square =>
                        <Square key={square} index={square} />
=======
                    squares.map((square, i) =>
                        <Square key={i} id={i} squareContent={square}/>
>>>>>>> Add game logic
                    )
                }
            </ul>
        </div>
    )
}

export default Board
