import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Vendore from "./Pages/Vendore/Vendore";
import Rider from "./Pages/Rider/Rider";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Company from "./Pages/Company/Company";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import ChowPass from "./Pages/ChowPass/ChowPass";
import Relay from "./Pages/Relay/Relay";

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/vendores" element={<Vendore />} />
        <Route path="/riders" element={<Rider />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chowpass" element={<ChowPass />} />
        <Route path="/relay" element={<Relay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
