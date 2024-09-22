import EcomerceData from "./Components/Home/EcomerceData";
import Home from "./Components/Home/Home";
import {Routes, Route } from 'react-router'
import Orderlist from "./Components/Home/Orderlist";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} >
      <Route path="" element= {<EcomerceData />} />
      <Route path="/order-list" element= {<Orderlist width={"86%"} />} />
        </Route>
    </Routes>
  );
}

export default App;
