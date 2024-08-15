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
import Webdevlopment from './Componentss/webDevelopment/Webdevlopment';
import MobileApp from './Componentss/MainService contant/mobile service/MobileApp';
import Digitalmarketing from './Componentss/MainService contant/Digital marketing/digitalmarketing';
import AI from './Componentss/MainService contant/AI/AI';
import CRM from './Componentss/MainService contant/CRM/CRM';
import ERP from './Componentss/MainService contant/ERP/ERP';
import Game from './Componentss/MainService contant/Game/Game';
import Custom from './Componentss/MainService contant/Custumsoft/Custom';
import Support from './Componentss/MainService contant/Support/Support';
import Eccomerce from './Componentss/MainService contant/Eccomerce/Eccomerce';
import Blockchain from './Componentss/MainService contant/Blockchain/Blockchain';
import Video from './Componentss/MainService contant/Videography/Video';
import UI from './Componentss/MainService contant/UI&UX/UI';
import Education from './Componentss/Main Industries/Education/Education';

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
          <Route path='/webDevelopment' element={<Webdevlopment/>} />
          <Route path='/MobileApp' element={<MobileApp/>} />
          <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
          <Route path='/AI' element={<AI/>} />
          <Route path='/CRM' element={<CRM/>} />
          <Route path='/ERP' element={<ERP/>} />
          <Route path='/Game' element={<Game/>} />
          <Route path='/Custom' element={<Custom/>} />
          <Route path='/Support' element={<Support/>} />
          <Route path='/Eccomerce' element={<Eccomerce/>} />
          <Route path='/Blockchain' element={<Blockchain/>} />
          <Route path='/Video' element={<Video/>} />
          <Route path='/UI&UX' element={<UI/>} />

          <Route path='/Educatin' element={<Education/>} />
        
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
