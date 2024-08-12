import {useState} from 'react'
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5;

  const addValue = () => {
    if(counter<20){
    setCounter(counter+1);
   
    }
  };

  const subValue = () => {
    if(counter>0){
    setCounter(counter-1)
    }
  }

  const limit = () => {
    if(setCounter< 0){
      
    }
  }

  return (
    <>
      <h1>React with Gajendra</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={subValue}>Sub Value</button>
    </>
  );
}

export default App;
