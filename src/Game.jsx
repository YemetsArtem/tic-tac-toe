import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Board from './components/Board'

const Game = () => {
    return (
        <Provider store={store}>
            <div className="game">
                <Board />
            </div>
        </Provider>
    )
}

export default Game
