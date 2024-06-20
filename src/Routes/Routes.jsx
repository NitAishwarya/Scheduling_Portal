
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slide1 from '../Components/Slide1/Slide1';
import Slide2 from '../Components/Slide2/Slide2';
import Slide3 from '../Components/Slide 3/Slide3';
import Slide4 from '../Components/Slide 4/Slide4';


const Routest = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<Slide1/>} />
          <Route path="/channelPartner" element={<Slide2 />} />
          <Route path="/projectDetails" element={<Slide3/>} />
          <Route path="/Assignment" element={<Slide4/>} />
        
  
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routest;