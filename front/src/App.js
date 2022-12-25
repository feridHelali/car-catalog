
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/wk_01/Navbar"
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CarPage from "./pages/CarPage";
import AddCarForm from "./components/wk_01/AddCarForm";
import UpdateCarForm from "./components/wk_01/UpdateCarForm";




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
          <Route path="/addCar" element={<AddCarForm />} />
          <Route path="/update-car/:id" element={<UpdateCarForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
