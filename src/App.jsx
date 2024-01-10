import React, {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

export default function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);
    function handleSelectSquare() {
        setActivePlayer((player) => player === 'X' ? '◯' : 'X');
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                    <Player initialName='Player 2' symbol='◯' isActive={activePlayer === '◯'}/>
                </ol>
                <GameBoard
                    activePlayerSymbol={activePlayer}
                    onSquareSelect={handleSelectSquare}
                />
            </div>
            <Log />
        </main>
    )
}
