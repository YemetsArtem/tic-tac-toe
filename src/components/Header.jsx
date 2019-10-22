import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restartGame, getWinner, getPlayer } from '../ducks/game'

function Header() {
    const winner = useSelector(state => getWinner(state));
    const player = useSelector(state => getPlayer(state));

    const dispatch = useDispatch();
    const dispatchActions = () => dispatch(restartGame());
    
    return (
        <header>
            {
                winner
                    ? <h2>{winner}</h2>
                    : <h2>Next player: {player}</h2>
            }
            <button onClick={dispatchActions}>Restart</button>
        </header>
    )
}

export default Header
