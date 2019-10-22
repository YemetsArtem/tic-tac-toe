import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Board from './components/Board'
import Header from './components/Header';

const Game = () => {
    return (
        <Provider store={store}>
            <div className="game">
                <Header />
                <Board />
            </div>
        </Provider>
    )
}

export default Game
