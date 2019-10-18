import React from 'react'
import { useSelector } from 'react-redux'
import { getPlayer } from '../ducks/players'
import Square from './Square'

const Board = ({ squares }) => {
    const player = useSelector(state => getPlayer(state));

    return (
        <div className="board">
            Next player: {player}
            <ul className="board">
                {
                    squares.map(square =>
                        <Square key={square} index={square} />
                    )
                }
            </ul>
        </div>
    )
}

export default Board
