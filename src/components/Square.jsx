import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAndChangePlayer, determineWinner, getPlayer, getWinner } from '../ducks/game'

const Square = ({ id, squareContent }) => {
    const player = useSelector(state => getPlayer(state));
    const winner = useSelector(state => getWinner(state));

    const dispatch = useDispatch();
    const dispatchActions = () => {
        dispatch(setAndChangePlayer(id, player));
        dispatch(determineWinner());
    };

    const handleClick = () => {
        winner 
            ? alert(`${winner}. Please start a new game`)
            : dispatchActions();
    }
    
    return (
        <li onClick={handleClick} className="square">
            {squareContent}
        </li>
    );
}

export default Square
