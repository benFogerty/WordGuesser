import React,{useState} from 'react';
import { useEffect } from 'react';
import './WordComponentStyles.css'
import InitialCircle from './InitialCircle';
import ChangedCircle from './ChangedCircle';
import ChangedCircleanimate from './CircleAnimation';
import Keyboard from './Keyboard';
import Timer from './Timer';
import bounce from './Sound/Bounce.mp3'
import WordComplete from './Sound/WordComplete.mp3'
import {Howl, Howler} from 'howler'




var randomWords = require('random-words');
let initialtime = Date.now() + 120000 //Sets time at start of game

let numRounds = 0



let word = ''

//function gets word between 4-8 characters
const getWord = () => {
    word = ''
    while(word.length<4){  
        word = randomWords({exactly: 1, maxLength: 8})
        word = word[0]
    }
}


getWord() ///gets random word


const Rounds = () => {

    //function to get 4-8 long letter word
    
    
    let tempGuessedArray = []
    let tempRightArray = []
    let tempArray = [] //temp array used to prevent infinite loop that happened when I called usestate updateArray function to add the " _" I think haopened beacuse react state is changed and rerenders I think...Putting here fixes 

   

    const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58", '#663399', "#ff7b25", "#ff006e",
    "#d64161"];

    

    let letter = '`'

    const[blankArray, updateArray] = useState(tempArray) //temparray is the clone of the state array that is being changed 
    const[guessedLetters, updateGuessed] = useState([])
    const[rightArray, RightArrayUpdate] = useState([])
    const[time, setTime] = useState(initialtime)
      
    const GameDisplay = () => {

        const getInput = (e) => { //gets what the current letter in the text field is
            letter = e.target.value
        }


        const CallBounceSound = (src) => {
            const Audio = new Howl({
                src,
                html5: true,})
            
            Audio.play()
            }

        const CallCompleteSound = (src) => {
            const Complete = new Howl({
                src,
                html5: true,})
            
            Complete.play()
            }
        

        const InitialCircles= () => {
            for(var i = 0; i<word.length; i++){
                var color = colors[i];
                tempArray.push(<InitialCircle key={i + color} bgColor={color} letter={letter} invisibleColor={color}/>);
            }
        }

        useEffect(() => {
            setTimeout(() => WordGuessed(), 1000);
          }, [rightArray]);


        

        const submitLetter = () => {
            //This function updates the array with the letter displayed
            let tempArray = [ ...blankArray ]; //create copy of current blankarray                              !!!!!!!!!!!Crucial!!!!!!!!!!!!!!!!!!
            tempGuessedArray = [...guessedLetters] //create copy of current guessed letter array                !!!!!!!!!!!Crucial!!!!!!!!!!!!!!!!!!
            let wasInWord = false;
            tempRightArray = [...rightArray]           
            
            if(tempGuessedArray.includes(letter.toUpperCase()) !== true && tempRightArray.includes(letter.toUpperCase()) !== true){
                for(let i = 0; i<word.length; i++){
                    if(letter.toLowerCase() === word.charAt(i)){
                        var color = colors[i];
                        wasInWord = true
                        tempArray[i] = <ChangedCircleanimate key={i + color} bgColor={colors[i]} letter={letter.toUpperCase()}/>   ///renders circle with animation first
                        CallBounceSound(bounce)
                        setTimeout(() => tempArray[i] = <ChangedCircle key={i + color} bgColor={colors[i]} letter={letter.toUpperCase()} />, 500)  ///after animation is done renders circle without animation
                        tempRightArray.push(letter.toUpperCase())
                        setTime(prev => prev + 5000)
                    }
                }

                if(wasInWord === false){
                    tempGuessedArray.push(letter.toUpperCase())
                    setTime(prev => prev - 2000)

                }
                RightArrayUpdate(tempRightArray)
                updateArray(tempArray) //updates blankarray to be the mutated copy
                document.getElementById("letter").value = ""
                updateGuessed(tempGuessedArray)
            }
            else{
                document.getElementById("letter").value = ""
            }


            
        }
        

        const handleKeyPress = (e) => {
            if (e.key === 'Enter'){
                submitLetter()
            }
        }    



        const ShowCircles = () => {
            
            return(
                <ul>
                    {blankArray.map(circle => (
                        <li>
                            {circle}
                            {console.log(circle)}
                        </li>
                    ))
                    }
                </ul>
            )
            
        }


        

        const AnimateRightWord = () => {
            for(let i = 0; i<word.length; i++){
                tempArray[i] = <ChangedCircleanimate key={i + colors[i]} bgColor={colors[i]} letter={word.charAt(i).toUpperCase()}/>
                updateArray(tempArray)
            }
            
        }





        const WordGuessed = () => {

            if(rightArray.length === word.length && rightArray.length !== 0){
                            

                    CallCompleteSound(WordComplete)
                    AnimateRightWord()
                                   
                    setTimeout(() => {   
                        setTimeout(() => getWord(), 100)
                        setTimeout(() => {tempArray = []           
                            let emptyArray = []
                            for(let i = 0; i<word.length; i++)
                                {
                                    tempArray.push(<InitialCircle key={i + colors[i]} bgColor={colors[i]} letter={letter} invisibleColor={colors[i]} />)
                                }
                                           
                            //resetting all states back to original to set up for new word
                            updateArray(tempArray)
                            RightArrayUpdate(emptyArray)
                            updateGuessed(emptyArray)
                            //updateArray(tempArray)
                            numRounds++     }, 200)         

                    }, 600)

            }
        }


        return (
            <div>
                <InitialCircles />

                <ShowCircles id='visuals' />

                <div id={'submit'}>
                    <input type="text" className="child" id="letter" maxLength="1" onChange={getInput} onKeyPress={handleKeyPress} autoComplete="off" autoFocus={true}/>
                    <button className="child" id="button" onClick={submitLetter} >Enter</button> 
                </div>
                <div id={'keyboardContainer'}>
                    <Keyboard guessedLetters={guessedLetters} blankArray={blankArray} rightArray={rightArray}/>
                </div>
                
            </div>
        )
    }


        return(
            <div>
                <div id ='timer'>
                    <Timer  time={time} numRounds={numRounds} word={word}/>
                </div>
                <GameDisplay />
            </div>
        )
    

    
    
}


export default Rounds;
