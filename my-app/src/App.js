import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/header'; 
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Post from './Components/Pages/Post'; 
import Create from './Components/Pages/Create'; 
import Read from './Components/Pages/Read';
import Events from './Components/Pages/Events';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Edit } from './Components/Pages/Edit';
 
function App() {
  return (
    <BrowserRouter>
      <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/event" element={<Events />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
