import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactNow from "./pages/ContactNow";
import TopCountries from "./pages/TopCountries";
import Partners from "./pages/Partners";
import Requote from "./forms/Requote";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-service" element={<OurServices />} />
          <Route path="/contact" element={<ContactNow />} />
          <Route path="/top-countries" element={<TopCountries />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/#requote" element={<Requote />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
