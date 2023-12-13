import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Intro from './scenes/Intro/Driver';
import Secondpage from './scenes/Intro/Luxury';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

const App = () => {
    return (  
        <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/Vehicletype" element={<Secondpage />} />
              <Route path="/Dashboard" element={<Home />} />
        </Routes>
    );
}
 
export default App;