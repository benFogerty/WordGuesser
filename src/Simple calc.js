import React,{useState} from 'react';
import './App.css';

function App() {

  

  const InputMoney = () => {

    const[currentNumOne, changeNumOne] = useState(0);
    const[currentNumTwo, changeNumTwo] = useState(0);
    const[currentSign, changeSign] = useState("");
    const[answer, updateAnswer] = useState("")

    const UpdateAnswerHandler = () => {

      

      if(currentSign === 'add'){

        updateAnswer(currentNumOne + currentNumTwo)
      }
      if(currentSign === 'subtract'){
  
        updateAnswer(currentNumOne - currentNumTwo)
      }
      if(currentSign === 'divide'){
  
        updateAnswer(currentNumOne / currentNumTwo)
      }
      if(currentSign === 'multiply'){
  
        updateAnswer(currentNumOne * currentNumTwo)
      }
  
      return(
        <h1>{answer}</h1>
      )


    }

    return(
      <div>
        <input type="number" id="numberOne"onChange={(e) => changeNumOne(parseInt(e.target.value))}/>
          <select onChange={(e) => changeSign(e.target.value)}>
            <option value="add">Add</option>
            <option value="subtract" >Subtract</option>
            <option value="divide" >Divide</option>
            <option value="multiply" >Multiply</option>
            </select>
        <input type="Number" onChange={e => changeNumTwo(parseInt(e.target.value))}/>
        <input type="button" onClick={() => UpdateAnswerHandler} />
      </div>
    )
    }


  return (
    <div className="App">
      <InputMoney/>
    </div>
  );
}

export default App;
