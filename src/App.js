
import './App.css';
import React, { useState } from 'react'
// import FormContainer from './child_component'
import Child from './Child';
function App() {
  const [name, setName]=useState('')
  const [age, setAge]=useState('')
  const [details, setDetails]=useState([]);
  function onSubmit()
  {
    setDetails(   [...details, {name,age}])
    setAge('');
    setName('');
  }
  function reset()
  {
    setAge('');
    setName('');
  }
  return (
    <div className="App">
      <span>Name:</span><Child label={"name"} type={"text"} value={name} states={setName} />
      <span>Age:</span><Child label={"age"} type={"number"} value={age} states={setAge}/>
      <div>
        <button onClick={()=>reset()}>Reset</button>
        <button  onClick={()=>onSubmit()}>Submit</button>
      </div>
      <div>{ details?.map((item)=><p>{item.name} - {item.age}</p>) }</div>
    </div>
  );
}

export default App;
