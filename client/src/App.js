import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Button from './Componentss/button/Button';
import Contact from './Componentss/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route path='/' element={
            <>
              <Navbar />
              <Main />
              <About />
              <Services />
              <Overview />
              <Industries />
              <Company />
              <Client />
              <Hiredeveloper />
              <Blog />
              <Button />
              <Footer />
            </>
          } />
          
          {/* Contact Route - Only Navbar and Footer */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
