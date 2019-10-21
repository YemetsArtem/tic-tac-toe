import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAndChangePlayer, determineWinner, getPlayer } from '../ducks/board'

const Square = ({ id, squareContent }) => {
    const player = useSelector(state => getPlayer(state));
    const dispatch = useDispatch();
    const dispatchActions = () => {
        dispatch(setAndChangePlayer(id, player));
        dispatch(determineWinner());
    };
    
    return (
        <li onClick={dispatchActions} className="square">
            {squareContent}
        </li>
    )
}

export default Square
