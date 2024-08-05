import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Componentss/Navbars/Navbar';
import Main from './Componentss/Main section/Main';
import About from './Componentss/Aboutesection.js/About';
import Footer from './Componentss/footer/footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={<Navbar/>} ></Route>
       

      </Routes>
      <Main/>
      <About/>
      
    <Footer/>
    </Router>

    
    </>
  );
}

export default App;
