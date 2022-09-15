import React from 'react';
import Countdown from 'react-countdown';
import GameOver from './GameOver';
import "./TimerStyle.css"

const Timer = (props) => {
    
    
   
    return(
        <div >
        <Countdown id='timer'  date={props.time}>
            <GameOver numRounds={props.numRounds} word={props.word} />
        </Countdown>
        </div>
    )
}

export default Timer