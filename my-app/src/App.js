import './App.css';
import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Post from './Components/Pages/Post';
// Lazy loaded components
// const Home = lazy(() => import('./Components/Pages/Home'));
// const About = lazy(() => import('./Components/Pages/About'));
// const Contact = lazy(() => import('./Components/Pages/Contact'));
// const Post = lazy(() => import('./Components/Pages/Post'));

function App() {
  return (
    <BrowserRouter>
      <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
