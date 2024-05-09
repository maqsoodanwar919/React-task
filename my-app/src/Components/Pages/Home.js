import React from 'react'
import About from './About'
import { useState } from 'react';
const Home = () => {
  const [count , setCount] = useState(0); 

  const addValue = () => { 
    setCount(count + 1); 
  };

  const removeVlue = () => { 
    setCount(count - 1); 
  };
  return (
    <div>
       <div className="container"> 
      Home Page

        <About name="ali" age="26" />
       <h1>Start React js {count}</h1>
       <button onClick={addValue}>Add value</button>
       <button onClick={removeVlue}>Add value</button>


       </div>
    </div>
  )
}

export default Home