import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Read from './components/Read'; 
function App() {
  return (  
       <>
        <Routes>  
          <Route path="/" element={<Create />} />
          <Route path="/Read" element={<Read />} /> 
        </Routes>  
        </>
  );
}

export default App;
