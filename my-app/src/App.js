import './App.css';
import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/header'; 
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Post from './Components/Pages/Post'; 
import Read from './Components/Pages/Read';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
      <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/read" element={<Read />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
