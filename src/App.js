import EcomerceData from "./Components/Home/EcomerceData";
import Home from "./Components/Home/Home";
import {Routes, Route } from 'react-router'
import Orderlist from "./Components/Home/Orderlist";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} >
      <Route path="" element= {<EcomerceData />} />
      
        </Route>
    </Routes>
  );
}

export default App;
