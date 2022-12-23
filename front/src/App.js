
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Home from "./components/wk_01/Home";
import Nav from "./components/wk_01/Navbar"

// const cars = [
//   {
//     id: 1,
//     label: "Mercedes Kompressor",
//     photoUrl: "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 75000
//   },
//   {
//     id: 2, label: "BMW",
//     photoUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 70000
//   },
//   {
//     id: 3, label: "Audi A4", 
//     photoUrl: "https://images.pexels.com/photos/5998732/pexels-photo-5998732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 82000
//   },
//   { id: 4, label: "RangeRover", photoUrl: "https://images.pexels.com/photos/5998732/pexels-photo-5998732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 105000 },
// ]

function App() {
  return (
    <div className="contailer">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
