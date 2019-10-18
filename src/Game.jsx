import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Board from './components/Board'

const Game = () => {
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Provider store={store}>
            <div className="game">
                <Board squares={squares}/>
            </div>
        </Provider>
    )
}

export default Game
