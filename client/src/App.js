import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Componentss/Navbars/Navbar';
import Main from './Componentss/Main section/Main';
import About from './Componentss/Aboutesection.js/About';

function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={<Navbar/>} ></Route>
       

      </Routes>
      <Main/>
      <About/>
      

    </Router>

    
    </>
  );
}

export default App;
