import logo from './logo.svg';
import './App.css';
import  Header from './component/Header/Header';
import  Home  from './component/Home/Home';
import Footer from './component/Footer/Footer';

import {  Routes, Route } from "react-router-dom";
import Eyeglasses from './component/Navlinks/Eyeglasses/Eyeglasses';
// import SUNGLASSES from './component/Sunglasses';
import Sunglasses from './component/Navlinks/Sunglasses/Sunglasses';
import Computerglasses from './component/Navlinks/Computerglasses/Computerglasses';
import Kidsglasses from './component/Navlinks/Kidsglasses';
import Contactlenses from './component/Navlinks/Contactlenses';
import Homeeyetest from './component/Navlinks/Homeeyetest';
import Storelocator from './component/Navlinks/Storelocator';

function App() {
  return (
    <>
    <div className="App">
      
        <Header />
        
        </div>
       
        <Routes>
          
      <Route path="/eyeglasses" element={<Eyeglasses/>}/>
      {/* {/* <Route path="/contact" element={<EY/>}/> */}
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/" element={<Home />}/> 
      {/* <Route path="/computer glasses" element={<COMPUTER GLASSES/>}/>  */}
      <Route path="/Sunglasses" element={<Sunglasses/>}/>
      <Route path="/Computerglasses" element={<Computerglasses/>}/>
      <Route path="/Kidsglasses" element={<Kidsglasses/>}/>
      <Route path="/Contactlenses" element={<Contactlenses/>}/>
      <Route path="/Homeeyetest" element={<Homeeyetest/>}/>
      <Route path="/Storelocator" element={<Storelocator/>}/>
      
         

      {/* <Route path='/hj' element={<Hj/>}/> */}
      </Routes>
    
     
      <footer>

      <Footer />
      </footer>
    </>
    
  );
}

export default App;
