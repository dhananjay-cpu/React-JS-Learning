import { useState } from 'react'

function App() {
  // let startVal = 15;
  let  [counter, setCounter] = useState(15)
  
  const addvalue = () =>{
    console.log("Counter Value:", counter);
    if (counter >= 20){
      counter = 20;
    }
    else{
      counter += 1
    }
    setCounter(counter)
  }

  const removevalue = () =>{
    console.log("Counter Value:", counter);
    if(counter < 1){
      counter = 0;
    }
    else{
      counter -= 1;
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>This is a Counter Project</h1>
      <h3 id='three'>Counter Value: {counter}</h3>
      
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
