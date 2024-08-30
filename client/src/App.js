import './App.css';
// import './index.css'
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
// import Hiredeveloper from './Componentss/Hire developer/Hiredeveloper';
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
import Banking from './Componentss/Main Industries/Banking/Banking';
import Publication from './Componentss/Main Industries/Publication/Publication';
import Sports from './Componentss/Main Industries/Industries main content/Sports/Sports';
import ECommerceid from './Componentss/Main Industries/Industries main content/E-commerce-idustries/ECommerceid';
import Realstate from './Componentss/Main Industries/real state/Realstate';
import Heathcare from './Componentss/Main Industries/Heathcare/Hrathcare';

import Food from './Componentss/Main Industries/Food/Food';
import Tour from './Componentss/Main Industries/Tour/Tour';
// import Marquee from './Componentss/Marquee/Marquee';

import Fullstack from './Componentss/MainService contant/Fullstack/Fullstack';
import Android from './Componentss/Hire developer main section/Androiddeveloper/Android';
import Javadevelopment from './Componentss/Hire developer main section/Javadeveloment/Javadevelopment';
import Angular from './Componentss/Hire developer main section/Anguler/Angular';
import Blockchaindeveloper from './Componentss/Hire developer main section/Blockchain developer/Blockchaindeveloper';
import Dotnetdeveloper from './Componentss/Hire developer main section/Dotnetdeveloper/Dotnetdeveloper';
import Fullstackdeveloper from './Componentss/Hire developer main section/Fullstack developer/Fullstackdeveloper';
import IOSdeveloper from './Componentss/Hire developer main section/IOS dveloper/IOSdeveloper';
import Laraveldeveloper from './Componentss/Hire developer main section/Laravel developer/Laraveldeveloper';
import Magento from './Componentss/Hire developer main section/Megento/Magento';
import Nodejsdeveloper from './Componentss/Hire developer main section/Nodejs developer/Nodejsdeveloper';
import Wordpressdeveloper from './Componentss/Hire developer main section/Wordpress developer/Wordpressdeveloper';
import Reactjsdeveloper from './Componentss/Hire developer main section/React js developer/Reactjsdeveloper';
import ReactNativedeveloper from './Componentss/Hire developer main section/React Native developer/ReactNativedeveloper';
import Phpdeveloper from './Componentss/Hire developer main section/PHP developer/Phpdeveloper';
import Pythondeveloper from './Componentss/Hire developer main section/python developer/Pythondeveloper';
import CompanyAbout from './Componentss/About drop down/Company/CompanyAbout';
import Career from './Componentss/About drop down/Career/Career';
import Portfolio from './Componentss/portfolio/Portfolio';

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
              {/* <Hiredeveloper /> */}
              <Blog />
              <Button />
              {/* <Marquee/> */}
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
          <Route path='/Fullstack' element={<Fullstack/>} />

          <Route path='/Education' element={<Education/>} />
          <Route path='/bankig' element={<Banking/>} />
          <Route path='/Publication' element={<Publication/>} />
          <Route path='/Sports' element={<Sports/>} />
          <Route path='/ECommerceid' element={<ECommerceid/>} />
          <Route path='/RealState' element={<Realstate/>} />
          <Route path='/Heathcare' element={<Heathcare/>} />
          <Route path='/Food' element={<Food/>} />
          <Route path='/Tour' element={<Tour/>} />


          <Route path='/Android' element={<Android/>} />
          <Route path='/javaDeveloper' element={<Javadevelopment/>} />
          <Route path='/Angulardeveloper' element={<Angular/>} />
          <Route path='/Blockchaindeveloper' element={<Blockchaindeveloper/>} />
          <Route path='/Dotnetdeveloper' element={<Dotnetdeveloper/>} />
          <Route path='/Fullstackdeveloper' element={<Fullstackdeveloper/>} />
          <Route path='/IOSdeveloper' element={<IOSdeveloper/>} />
          <Route path='/Laraveldeveloper' element={<Laraveldeveloper/>} />
          <Route path='/Magentodeveloper' element={<Magento/>} />
          <Route path='/NodeJsdeveloper' element={<Nodejsdeveloper/>} />
          <Route path='/wordpressdeveloper' element={<Wordpressdeveloper/>} />
          <Route path='/Reactjsdeveloper' element={<Reactjsdeveloper/>} />
          <Route path='/ReactNativedeveloper' element={<ReactNativedeveloper/>} />
          <Route path='/Phpdeveloper' element={<Phpdeveloper/>} />
          <Route path='/Pythondeveloper' element={<Pythondeveloper/>} />


          <Route path='/CompanyAbout' element={<CompanyAbout/>} />
          <Route path='/Career' element={<Career/>} />


        <Route path='/Portfolio' element={<Portfolio/>} />
        
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
