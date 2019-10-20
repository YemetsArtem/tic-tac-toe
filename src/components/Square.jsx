<<<<<<< HEAD
import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlayer, changePlayer } from '../ducks/players'

const Square = ({ index }) => {
    const currentPlayer = useSelector(state => getPlayer(state));
    const [player, setPlayer] = useState(currentPlayer);
    const dispatch = useDispatch();
    const dispatchAction = useCallback(
        () => dispatch(changePlayer()),
        [dispatch]
    )   
    
    return (
        <li onClick={() => { dispatchAction(); setPlayer(currentPlayer)}} className="square">
            {player}
=======
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fillSquare, getPlayer, changePlayer } from '../ducks/board'

const Square = ({ id, squareContent }) => {
    const player = useSelector(state => getPlayer(state));
    const dispatch = useDispatch();
    const dispatchActions = () => {
        dispatch(changePlayer());
        dispatch(fillSquare(id, player));
    }

    return (
        <li onClick={dispatchActions} className="square">
            {squareContent}
>>>>>>> Add game logic
        </li>
    )
}

export default Square
