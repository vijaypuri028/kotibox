import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Componentss/Navbars/Navbar';
import Main from './Componentss/Main section/Main';
import About from './Componentss/Aboutesection.js/About';
import Footer from './Componentss/footer/footer';
import Services from './Componentss/services/Services';
import Industries from './Componentss/Industries/Industries';
import Company from './Componentss/Company section/Company';
import Client from './Componentss/Clientsection/Client';
import Overview from '../src/Componentss/overview/Overview';
import Blog from './Componentss/blog/blog';
import Hiredeveloper from './Componentss/Hire developer/Hiredeveloper';


function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={<Navbar/>} ></Route>
       

      </Routes>
      <Main/>
      <About/>
      <Services/>
      <Overview/>
      <Industries/>
     
      <Company/>
      <Client/>
      <Hiredeveloper/>
      <Blog/>
     
      
    <Footer/>
    </Router>

    
    </>
  );
}

export default App;
