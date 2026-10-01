import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Studio from "./Pages/Studio";
import Work from "./Pages/Work";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
