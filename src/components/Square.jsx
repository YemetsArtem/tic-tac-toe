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
        </li>
    )
}

export default Square
