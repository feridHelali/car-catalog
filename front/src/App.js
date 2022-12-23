
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/wk_01/Navbar"
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CarPage from "./pages/CarPage"




function App() {
  return (
    <Router>
      <div className="contailer">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/car-list" element={<CarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
