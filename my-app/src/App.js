import './App.css';
import { useState } from 'react';
import { Comment } from './Comment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact'; 
import Header from './Components/Layout/header';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [count , setCount] = useState(0); 

  const addValue = () => { 
    setCount(count + 1); 
  };

  const removeVlue = () => { 
    setCount(count - 1); 
  };

  return (
    <>  

       {/* <Comment name="ali" age="26" />
       <h1>Start React js {count}</h1>
       <button onClick={addValue}>Add value</button>
       <button onClick={removeVlue}>Add value</button> */}
       <BrowserRouter> 
         <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
