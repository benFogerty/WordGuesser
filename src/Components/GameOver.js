import React from 'react';
import './GameOverStyle.css'


const GameOver = (props) => {
    return(
        <div>
            <div id="background" />
            <div id="gameOverScreen">
                <h2 id="gameOvertext">Game Over!</h2>
                <h2 className="info"> Score: {props.numRounds}</h2>
                <h2 className="info"> Losing Word: {props.word}</h2>
                <button id="playAgainButton" onClick={() => window.location.reload(false)}>Play Again?</button>
            </div>
        </div>
    )
}

export default GameOver