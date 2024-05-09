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
  

  return (
    <>  

     
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
