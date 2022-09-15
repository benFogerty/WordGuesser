import React,{useState} from 'react';
import './Keyboard.css'


const Keyboard = (props) => {

    const topLine = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const midLine = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const bottomLine = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']



    return(
        <div className="base">
            <div className="line1">
                {topLine.map(key => {
                    if(props.guessedLetters.indexOf(key) !== -1){
                        return(
                            <div className='key' id='wrong'>{key}</div>
                        )
                    }
                    if(props.rightArray.indexOf(key) !== -1){
                        return(
                            <div className='key' id='right'>{key}</div>
                        )
                    }
                    
                    else{
                        return(
                            <div className='key'>{key}</div>
                        )
                    }
                })}
            </div>
            <div className="line2">
            {midLine.map(key => {
                    if(props.guessedLetters.indexOf(key) !== -1){
                        return(
                            <div className='key' id='wrong'>{key}</div>
                        )
                    }
                    if(props.rightArray.indexOf(key) !== -1){
                        return(
                            <div className='key' id='right'>{key}</div>
                        )
                    }
                    
                    else{
                        return(
                            <div className='key'>{key}</div>
                        )
                    }
                })}
            </div>
            <div className="line3">
            {bottomLine.map(key => {
                    if(props.guessedLetters.indexOf(key) !== -1){
                        return(
                            <div className='key' id='wrong'>{key}</div>
                        )
                    }
                    if(props.rightArray.indexOf(key) !== -1){
                        return(
                            <div className='key' id='right'>{key}</div>
                        )
                    }
                    
                    else{
                        return(
                            <div className='key'>{key}</div>
                        )
                    }
                })}
            </div>
	    </div>
    )
}

export default Keyboard