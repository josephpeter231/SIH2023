import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Analytics from './CrankshaftBearing1'
import Intro from './scenes/Intro/Driver';
import Secondpage from './scenes/Intro/Luxury';
import CrankshaftBearing2 from './CrankshaftBearing2';




const App = () => {
    return (  
        <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/Vehicletype" element={<Secondpage />} />
              <Route path="/Dashboard" element={<Home />} />
              <Route path="/CrankshaftBearing1" element={<Analytics/>} />
              <Route path="/CrankshaftBearing2" element={<CrankshaftBearing2/>} />
        </Routes>
    );
}
 
export default App;